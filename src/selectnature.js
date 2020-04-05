import React, { Component } from 'react';
import { Form,Loader,Container,Header,Icon,Button } from 'semantic-ui-react';
import formsCatalog from './FormsCatalog.js';
import emailjs from 'emailjs-com';
import ImageUploader from "react-images-upload";
import Axios from 'axios';
const API_URL = 'https://inspekt-open.herokuapp.com' // 'http://localhost:3001'

class Selectnature extends Component {

  constructor(props){
    super(props)
    this.state = {loading:true,expertise:[],pictures: [],brands:[]}
    this.onDrop = this.onDrop.bind(this);
  }
  
  dataTransmissionToTheDealer = async()=>{
    
    const data = await new Promise((resolve,reject)=>{
      let formdata = new FormData();
      console.log('base formdata in Promise', formdata)
      this.state.pictures.forEach((value,index)=>{
        formdata.append('filedata',value);
        if(index==this.state.pictures.length-1){
          console.log('resolving formdata', {formdata, index})
          resolve(formdata);
        }
      })
    })

    console.log('axios request data', data)

    const axiosResponse = await Axios({
      method: "post",
      url: `${API_URL}/upload`,
      data,
      config: { headers: { "Content-Type": "multipart/form-data" } }
    });
    console.log('axiosResponse : ',axiosResponse);

    const templateParams = {
      "reply_to": "reply_to_value",
      "from_name": this.state.useremail,
      "to_name": "Mickael",
      "message_html": JSON.stringify(this.state.expertise)+JSON.stringify(this.state.userphone)
    };
   
    //email sending of this.state.expertise
    emailjs.send('smtp_server','template_va829UdN', templateParams, 'user_VtOWCcg8bYKhCqLPO5eFS')
      .then((response) => {
         console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
         console.log('FAILED...', err);
      });
    }

  handleChange = async(event,valueselected) => {
    const nature = this.props.naturelist.filter(nature=>nature.value===valueselected.value);

    //build an array of object{value,text} of brand for Form.Select Component
    for (let [key, value] of Object.entries(formsCatalog)) {

      if(key===nature[0].value){
         const brands = value.brands;
         console.log('marques : ',brands)
         if(brands){
          this.state.brands = await Promise.resolve(brands.map(element=>({value:element,text:element})));
         }
         
      }
    }
    if(nature[0]){
      this.setState({ nature:nature[0] });
    }

  }

  inputHandleChange = (event,data)=>{

    const inputvalue = data.value;
    const labelvalue = data.placeholder;
    inputvalue && (this.state.expertise=([...this.state.expertise,{[labelvalue]:inputvalue}]))
    console.log('state : ',this.state);

  }

  toggleHandleChange = (event,data)=>{

    const inputvalue = data.label;
    this.state.expertise=([...this.state.expertise,{option:inputvalue}])
    console.log('state : ',this.state);
  }

  onDrop(picture) {
    this.setState({
        pictures: this.state.pictures.concat(picture),
    });
  }

  identificationInputBuilder = ()=>{
    if(this.state.identificationformlist!==undefined && this.state.nature){
      const addOnsCatalog = this.state.identificationformlist.addOns;
      const addOnsOfNatureSelected = this.state.nature.formStepsTypes[2].addOns; //storage of all addons of step 2
      const regularOfNatureSelected = this.state.identificationformlist.regular; //storage of regular of step 2

      //input from regular list

      const InputRegular = regularOfNatureSelected.map(element=>(
      <Form.Input key={element.property} label={element.title} placeholder={element.title} onChange={this.inputHandleChange}/>
      ));

      //input from addOns list
      const InputFromAddonsOfNatureSelected = addOnsOfNatureSelected.map(element=>(<Form.Input key={addOnsCatalog[element].property} label={addOnsCatalog[element].title} placeholder={addOnsCatalog[element].title} onChange={this.inputHandleChange}/>));

      const totalinput = [...InputRegular,...InputFromAddonsOfNatureSelected];
      return(totalinput);
    }
    

  }

  configurationInputBuilder = ()=>{
    if(this.state.configurationformlist!==undefined && this.state.nature){
      const addOnsCatalog = this.state.configurationformlist.addOns;
      const addOnsOfNatureSelected = this.state.nature.formStepsTypes[3].addOns; //storage of all addons of step 2

      const firstAddons = addOnsOfNatureSelected[0];

      const InputFromAddonsOfNatureSelected = addOnsOfNatureSelected.map(
        (element)=>(
        addOnsCatalog[element].data?
        <div>
          <Form.Input 
            key={addOnsCatalog[element].property}
            label={addOnsCatalog[element].title} 
            placeholder={addOnsCatalog[element].title}
            list={addOnsCatalog[element].property}
            onChange={this.inputHandleChange}
          />
          <datalist id={addOnsCatalog[element].property}>
            {
              addOnsCatalog[element].data.map(dataelement=><option value={dataelement}/>)
            }
          </datalist>
        </div>
        :(
          addOnsCatalog[element].toggle
          ?
            <div className='togglebtn'>
              {
                addOnsCatalog[element].title
              }
              {
                addOnsCatalog[element].toggle.map(elementcheckbox=><Form.Checkbox toggle key={elementcheckbox} label={elementcheckbox} onChange={this.toggleHandleChange}/>)
              }
              
            </div>
            
          :
          <Form.Input 
            key={addOnsCatalog[element].property}
            label={addOnsCatalog[element].title} 
            placeholder={addOnsCatalog[element].title}
            onChange={this.inputHandleChange}
            />
        )
        
      ));

      return(InputFromAddonsOfNatureSelected);
    }
    

  }

  async componentDidMount(){
    //loading datas form formcatalog
    this.state.identificationformlist = await Promise.resolve(formsCatalog.formSteps({step:2}));
    this.state.configurationformlist = await Promise.resolve(formsCatalog.formSteps({step:3}));

    this.setState({loading:false});
    
  }

  async componentDidUpdate(){
     console.log('state updated : ',this.state); 
  }

  render() {
    const naturelist = this.props.naturelist;

    return (
        
        <Container className="natureselect">
          <Header as='h3' className='headertitle'>
            <Icon name='edit' />
            <Header.Content>Dites-nous en plus sur votre machine.</Header.Content>
          </Header>
          
              {
                !this.state.loading?
                <div>
                  <Form enctype="multipart/form-data" onSubmit={this.dataTransmissionToTheDealer}>
                    <Form.Select
                      label='Type de machine'
                      options={naturelist}
                      placeholder='Sélectionner'
                      onChange={this.handleChange}
                    />
                  
                    {
                    this.state.nature&&
                    <div>
                      <Form.Input 
                        key="brandlist"
                        label="Marque" 
                        placeholder="Marque"
                        list="brandlist"
                        onChange={(event,data)=>(
                          data.value && this.setState({brand:data.value}))}
                      />
                      <datalist id="brandlist">
                        {
                          this.state.brands&&this.state.brands.map(dataelement=><option value={dataelement.text}/>)
                        }
                      </datalist>
                    </div>
                    }
                  {
                    this.identificationInputBuilder()
                  }
                  {
                    this.configurationInputBuilder()
                  }
                  {this.state.nature &&<Form.Input id='useremail' iconPosition='left' label='Votre email' placeholder='Email'>
                    <Icon name='at' />
                    <input value={this.state.useremail} onChange={(event)=>this.setState({useremail:event.target.value})}/>
                  </Form.Input>
                  }
                  {this.state.nature &&<Form.Input iconPosition='left' label='Votre numéro de téléphone' placeholder='Portable'>
                    <Icon name='phone' />
                    <input value={this.state.userphone} onChange={this.state.userphone} onChange={(event)=>this.setState({userphone:event.target.value})}/>
                  </Form.Input>
                  }
                  {
                    this.state.nature&&<ImageUploader
                    withIcon={true}
                    withPreview={true}
                    label="Notre proposition sera meilleure avec de belles images"
                    buttonText="Joindre mes photos"
                    onChange={this.onDrop}
                    imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                    maxFileSize={5242880}
                  />
                  }
                  {this.state.nature && <Form.Field control={Button} id='submitbutton'>Demander une estimation de reprise</Form.Field>
                  }
                  
                  
                  </Form>
                </div>
                :
                <Loader active inline='centered' />
              }
          
        </Container>
        
    )
  }
}

export default Selectnature
