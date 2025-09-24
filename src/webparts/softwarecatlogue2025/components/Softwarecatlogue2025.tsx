import * as React from 'react';
import styles from './Softwarecatlogue2025.module.scss';
import type { ISoftwarecatlogue2025Props } from './ISoftwarecatlogue2025Props';

import {Stack,IStackStyles} from 'office-ui-fabric-react'; 
import { DatePicker } from 'office-ui-fabric-react/lib/DatePicker';
import { Dropdown,IDropdownStyles,IDropdownOption} from 'office-ui-fabric-react/lib/Dropdown';
import {PrimaryButton } from 'office-ui-fabric-react/lib/Button';
 
import Service from './Service';
import { PeoplePicker, PrincipalType } from "@pnp/spfx-controls-react/lib/PeoplePicker";

import { ChoiceGroup,IChoiceGroupOption } from 'office-ui-fabric-react'; 



let defaultUsers:string[]=[];
let  Myvalues:Array<string>=[];

//let MyGroup='';

let First1='';
let Second1='';
let myitemId='';
let ThirdBussinesowner='';
let myFinalSystemOwner='';
let MyToogleValue='';
//let Techowner='';
let ReviewdBy='';

let SoftwareRestriction='';
let BussinessOwnerText='';

//Choices

//let SystemORTechnicalOwnerchoicevalue='';

let CategoryValue='';
let AvaliblityText=''
let ExplicitUseCase='';
let SoftwareScope='';
let SoftwareEdition='';
let LicenseType='';
let TypeofAIcapabilities='';
let Dependency='';
let DataClassification='';
let SoftwareMissionCriticalRating='';
let Risks='';
let AuthenticationMethod='';
let AuthorizationMethod='';
let DiscoverySource='';
let BussinessOwner='';
let SystemORTechnicalOwnerchoicevalue='';
let DecisionStatus='';
let ReviewFrequency='';
let EMPPolicy='';
let EMPWorkstyle='';
let SoftwareLocation='';

//End

let FinalReviewDate='';
let FinalNextReviewDate='';
let FinalApprovalDate='';


//End

const stackTokens = { childrenGap: 50 };

const stackStyles: Partial<IStackStyles> = { root: { padding: 10} };

const stackButtonStyles: Partial<IStackStyles> = { root: { width: 20 } };

//Modify

const RadioLiceseRequirment: IChoiceGroupOption[] = 
[  { key: "Yes", text: "Yes" , },  { key: "No", text: "No" },];  


const RadioAICapblities: IChoiceGroupOption[] = 
[  { key: "Yes", text: "Yes" , },  { key: "No", text: "No" },];  


//END


const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 300 },
};


const Radiotest: IChoiceGroupOption[] = 
[  { key: "Yes", text: "Yes" , },  { key: "No", text: "No" },];  

export interface ISoftwareCatlogueVersion2025 {

  //FreeText

  SoftwareTitle:any;
  RiskManagement:any;
  SNOWReference:any;
  JiraReference:any;

  //END

  //Lookups

  SoftwareRestrictionItems:any;
  MySoftwareRestrictionValue:any;

  ExplicitUsecaseItems:any;
  MyExplicitUsecaseValue:any;

  SoftwareScopeItems:any;
  MySoftwareScopeValue:any;

  SoftwareEditionItems:any;
  MySoftwareEditionValue:any;

  LicenseTypeItems:any;
  MyLicenseType:any;

  DataClassificationsItems:any;
  MyDataClassifications:any;

  RiskItems:any;
  MyRiskvalue:any;

  DependencyItems:any;
  MyDependency:any;

  DiscoveryItems:any;
  MyDiscovery:any;

  BusinessOwnerItems:any;
  MyBusinessOwner:any;
  
  //END

  //Choice
  
  
  AvailabilityItems:any;
  MyAvailability:any;

  AuthorizationMethodItems:any;
  AuthorizationMethod:any;

  AuthenticationMethodItems:any;
  AuthenticationMethod:any;

  DecisionStatusItems:any;
  DecisionStatus:any;

  EMPWorkstyleItems:any;
  EMPWorkstyle:any;

  EMPPolicyItems:any;
  EMPPolicy:any;
  

  ReviewFrequencyItems:any;
  ReviewFrequency:any;

  SoftwareMissionCrticalRatingItems:any;
  SoftwareMissionCrticalRating:any;

  AiCapablitiesItems:any;
  AiCapablities:any;

      CategoryItems:any;
      Category:any;

      SoftwareLocationItems:any;
      SoftwareLocation:any;

      SystemORTechnicalOwnerItems:any;
      SystemORTechnicalOwnerchoice:any;


  //END

   //Multi
   Description:any;
   PublisherVendorProvider:any;
   SoftwareRestrictionNotes:any;
   RiskNotes:any;
   DecisionNotes:any;
   Comments:any;

   //End
  
     //Date
     dtReviewDate:any;
     dtNextReviewDate:any;
     dtApprovalEndDate:any;

     //END

     //PP

     BussniessOwenr:any;
     SystemorTechownerpp:any;
     ReviewedBy:any;
    
    
     
     //END


      //Chocice Static 

  MyYesnoAICap:any;
 MyyesNoLiceReq:any;
  //END
 

  ToggleHidevalue:any;
  Empsignpeople:any;

SystemownerEmailArray:any;

showSavebutton:boolean;
showupdatebutton:boolean;

TestValue:any;


}




export default class Softwarecatlogue2025 extends React.Component<ISoftwarecatlogue2025Props,ISoftwareCatlogueVersion2025> {
  
  public _service: Service;
  //protected ppl: PeoplePicker;
  public constructor(props: ISoftwarecatlogue2025Props) {
    super(props);
    this.state = {

      //Controls
      
      SoftwareTitle:"",
      RiskManagement:"",
      SNOWReference:"",
      JiraReference:"",

      //END

      //Lookup
      SoftwareRestrictionItems:[],
      MySoftwareRestrictionValue:"",

      ExplicitUsecaseItems:[],
      MyExplicitUsecaseValue:"",

      SoftwareScopeItems:[],
      MySoftwareScopeValue:"",

      SoftwareEditionItems:[],
      MySoftwareEditionValue:"",

      LicenseTypeItems:[],
      MyLicenseType:"",

      DataClassificationsItems:[],
      MyDataClassifications:"",

      RiskItems:[],
      MyRiskvalue:"",

      DependencyItems:[],
      MyDependency:"",
    
    
      DiscoveryItems:[],
      MyDiscovery:"",


      BusinessOwnerItems:[],
      MyBusinessOwner:"",

      //END

      //Choice

      AvailabilityItems:[],
      MyAvailability:"",

      AuthorizationMethodItems:[],
      AuthorizationMethod:"",

      AuthenticationMethodItems:[],
      AuthenticationMethod:"",

      DecisionStatusItems:[],
      DecisionStatus:"",

      EMPWorkstyleItems:[],
      EMPWorkstyle:"",

      
      EMPPolicyItems:[],
      EMPPolicy:"",


      ReviewFrequencyItems:[],
      ReviewFrequency:"",
     
      SoftwareMissionCrticalRatingItems:[],
      SoftwareMissionCrticalRating:"",

      AiCapablitiesItems:[],
      AiCapablities:"",
    
      CategoryItems:[],
      Category:"",
      
      SoftwareLocationItems:[],
      SoftwareLocation:"",

      SystemORTechnicalOwnerItems:[],
      SystemORTechnicalOwnerchoice:"",
      

      //END

      //Multi
      Description:"",
      PublisherVendorProvider:"",
      SoftwareRestrictionNotes:"",
      RiskNotes:"",
      DecisionNotes:"",
      Comments:"",

      //End
    
  //Date
   
  dtReviewDate:"",
  dtNextReviewDate:"",
  dtApprovalEndDate:"",

  //END

  //PP

  BussniessOwenr:[],
  SystemorTechownerpp:[],
  ReviewedBy:[],
 
  
  //EDN


  //Chocice Static 

  MyYesnoAICap:"",
  MyyesNoLiceReq:"",

  //END

  ToggleHidevalue:"",
  Empsignpeople:[],
  SystemownerEmailArray:[],

showSavebutton:true,
showupdatebutton:false,

TestValue:""
    
     
    };

    this._service = new Service(this.props.url, this.props.context);

  



    

    this.GetAllAllSoftwareRestrictions();
    this.GetAllAllExplicitUsecase();
    this.GetAllSoftwareScope();
    this.GetAllSoftwareEditions();
    this.GetAllLicenseTypes();
    this.GetAllDataClassifications();
    this.GetAllRisks();
    this.GetAllDependency();
    this.GetAllDiscoverySources();
    this.GetAllBussinessOwners();
    

    //Choices

    this.GetAllAvaliblity();
    this.GetAllAuthorizationMethod();
    this.GetAllAuthenticationMethod();
    this.GetAllDecisionStatus();
    this.GetAllEMPWorkstyle();
    this.GetAllEMPPolicy();

    this.GetAllReviewFrequency();
    this.GetAllSoftwareMissionCrticalRating();
    this.GetAllTypeofAIcapabilities();
    this.GetAllCategories();
    this.GetAllSoftwareLocation();
    this.GetAllSystemorTechnicalOwner();


    //END

  }

  //Controls

  private changesoftwareTitle(data: any): void {

    this.setState({ SoftwareTitle: data.target.value });

  }

  private changesRiskManagement (data: any): void {

    this.setState({ RiskManagement: data.target.value });

  }

  private changeSNOWReference(data: any): void {

    this.setState({ SNOWReference: data.target.value });

  }


  private changeJiraRefrence(data: any): void {

    this.setState({ JiraReference: data.target.value });

  }

  //END

  //LookUp

  public async GetAllAllSoftwareRestrictions() {

          
     myitemId = this.getParam('SID');

     myitemId = this.getParam('SID');

     myitemId.replace("",'');

    let ItemInfo = await this._service.getItemByID(myitemId);

    console.log(myitemId);

    if(myitemId!="")
    {

      this.setState({showSavebutton:false})
      this.setState({showupdatebutton:true})

      if (ItemInfo.Title != '')
      {



 CategoryValue=ItemInfo.Category
 AvaliblityText=ItemInfo.Availability
 ExplicitUseCase=ItemInfo.ExplicitUsecase
 SoftwareRestriction=ItemInfo.SoftwareRestriction
 SoftwareEdition=ItemInfo.SoftwareEdition
 SoftwareScope=ItemInfo.SoftwareScope
 LicenseType=ItemInfo.LicenseType
 TypeofAIcapabilities=ItemInfo.TypeofAIcapabilities
 Dependency=ItemInfo.Dependency
 DataClassification=ItemInfo.DataClassification
 SoftwareMissionCriticalRating=ItemInfo.field_17
 Risks=ItemInfo.Risks
 AuthenticationMethod=ItemInfo.AuthenticationMethod
 AuthorizationMethod=ItemInfo.AuthorizationMethod
 DiscoverySource=ItemInfo.DiscoverySource
 BussinessOwner=ItemInfo.BusinessOwner
 //MYSYSVAL

 DecisionStatus=ItemInfo.DecisionStatus
 ReviewFrequency=ItemInfo.ReviewFrequency
 EMPPolicy=ItemInfo.EMPPolicy
 EMPWorkstyle=ItemInfo.EMPWorkstyle
 SoftwareLocation=ItemInfo.SoftwareLocation


        this.setState({SoftwareTitle:ItemInfo.Title})
        this.setState({Category:ItemInfo.CategoryKey})
        this.setState({MyAvailability:ItemInfo.AvailabilityKey})
        this.setState({MyExplicitUsecaseValue:ItemInfo.ExplicitUsecaseKey})
        this.setState({MySoftwareRestrictionValue:ItemInfo.SoftwareRestrictionKey})
        this.setState({MySoftwareScopeValue:ItemInfo.SoftwareScopeKey})
        this.setState({MySoftwareEditionValue:ItemInfo.SoftwareEditionkey})
        this.setState({MyLicenseType:ItemInfo.LicenseTypekey})
        this.setState({AiCapablities:ItemInfo.TypeofAIcapabilitieskey})
        this.setState({MyDependency:ItemInfo.Dependencykey})

        this.setState({MyDataClassifications:ItemInfo.DataClassificationKey})
        this.setState({SoftwareMissionCrticalRating:ItemInfo.SoftwareMissionCriticalRatingkey})
        this.setState({MyRiskvalue:ItemInfo.RisksKey})
        this.setState({AuthenticationMethod:ItemInfo.AuthenticationMethodKey})
        this.setState({AuthorizationMethod:ItemInfo.AuthorizationMethodkey})
        this.setState({MyDiscovery:ItemInfo.DiscoverySourceKey})

        this.setState({MyBusinessOwner:ItemInfo.BusinessOwnerKey})
        this.setState({SystemORTechnicalOwnerchoice:ItemInfo.SystemorTechnicalOwnerkey})
        this.setState({DecisionStatus:ItemInfo.DecisionStatuskey})
        this.setState({ReviewFrequency:ItemInfo.ReviewFrequencyKey})

        this.setState({EMPPolicy:ItemInfo.EMPPolicyKey})
        this.setState({EMPWorkstyle:ItemInfo.EMPWorkstyleKey})
        this.setState({SoftwareLocation:ItemInfo.SoftwareLocationKey})

        //Text boxes
       this.setState({Description:ItemInfo.field_4})
       this.setState({SoftwareRestrictionNotes:ItemInfo.field_7})
        this.setState({PublisherVendorProvider:ItemInfo.field_8})
         this.setState({RiskNotes:ItemInfo.field_19})
         this.setState({DecisionNotes:ItemInfo.field_28})
         this.setState({RiskManagement:ItemInfo.field_36})
         this.setState({SNOWReference:ItemInfo.field_37})
         this.setState({JiraReference:ItemInfo.field_38})
         this.setState({Comments:ItemInfo.field_39})
//END

//Dates

    let strdtReviewDate= ItemInfo.field_29.split('T');
    strdtReviewDate[0].replace("-","/");
    let mainstr=strdtReviewDate[0].replace("-","/");
    let strToDate = new Date(mainstr);
    this.setState({dtReviewDate:strToDate})

    let NextReviewDate= ItemInfo.field_32.split('T');
    NextReviewDate[0].replace("-","/");
    let mainstr1=NextReviewDate[0].replace("-","/");
    let strToDate1 = new Date(mainstr1);
    this.setState({dtNextReviewDate:strToDate1})


    let ApprovalEndDate= ItemInfo.field_33.split('T');
    ApprovalEndDate[0].replace("-","/");
    let mainstr2=ApprovalEndDate[0].replace("-","/");
    let strToDate2 = new Date(mainstr2);
    this.setState({dtApprovalEndDate:strToDate2})
//END

//Static Choce
this.setState({MyyesNoLiceReq:ItemInfo.field_11})
this.setState({MyYesnoAICap:ItemInfo.field_13})
this.setState({ToggleHidevalue:ItemInfo.Hidden})
MyToogleValue=ItemInfo.Hidden;
SystemORTechnicalOwnerchoicevalue=ItemInfo.SystemORTechnicalOwner;

//END
//SystemorTechowner
//PP
//this.setState({BussniessOwenr:ItemInfo.BusinessOwnerNameId})
this.setState({ReviewedBy:ItemInfo.ReviewedBy.EMail})
this.setState({BussniessOwenr:ItemInfo.BusinessOwnerName.EMail})

if(ItemInfo.SystemorTechnicalOwnernames.length==2)
{

  if(ItemInfo.SystemorTechnicalOwnernames[0]!=null)
      {

    First1=ItemInfo.SystemorTechnicalOwnernames[0].EMail;

     }

   if(ItemInfo.SystemorTechnicalOwnernames[1]!=null)

        {

       Second1=ItemInfo.SystemorTechnicalOwnernames[1].EMail;

        }

    let  ThirdBussinesowner1=First1+","+Second1;
    myFinalSystemOwner= ThirdBussinesowner1.replace(/,(\s+)?$/, '');

    //this.setState({TestValue:myFinalSystemOwner});

    

    let strEmails='';
    
    for(var count=0;count<ItemInfo.SystemorTechnicalOwnernames.length;count++)

      {

      let userInfo1 = await this._service.getUserByEmail(ItemInfo.SystemorTechnicalOwnernames[count].EMail).then((info:any)=>{
      Myvalues.push(info.Id);
      

      
       });

       this.setState({SystemownerEmailArray:Myvalues});

        console.log(userInfo1);
     
       // Myvalues.push(ItemInfo.SystemorTechnicalOwnernames[count].EMail);
        if(strEmails!="")
        {
         strEmails+=", "+ItemInfo.SystemorTechnicalOwnernames[count].EMail;

        }

        else
        {

          strEmails=ItemInfo.SystemorTechnicalOwnernames[count].EMail;
        }
        

        
      }
      
      let StrArray=ItemInfo.SystemorTechnicalOwnernames[0].EMail+";"+ItemInfo.SystemorTechnicalOwnernames[1].EMail;

       this.setState({SystemorTechownerpp:StrArray})

    

}

else
{
//Single

 for(var count=0;count<ItemInfo.SystemorTechnicalOwnernames.length;count++)

      {

 let userInfo1 = await this._service.getUserByEmail(ItemInfo.SystemorTechnicalOwnernames[count].EMail).then((info:any)=>{
      Myvalues.push(info.Id);

       });

       console.log(userInfo1);
 }
      

   this.setState({SystemorTechownerpp:ItemInfo.SystemorTechnicalOwnernames[0].EMail})

   myFinalSystemOwner=ItemInfo.SystemorTechnicalOwnernames[0].EMail;

   this.setState({SystemownerEmailArray:Myvalues});


}

//END
   
      }


    }



   var data = await this._service.GetAllSoftwareRestrictions();

    console.log(data);

    var AllSoftwareRestrictions: any = [];

    for (var k in data) {

      AllSoftwareRestrictions.push({ key: data[k].ID, text: data[k].Title});
    }

    console.log(AllSoftwareRestrictions);

    
   this.setState({ SoftwareRestrictionItems: AllSoftwareRestrictions });
  

  }

  private hadleSoftwareRestriction(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {

    
    this.setState({ MySoftwareRestrictionValue:item.key });

    SoftwareRestriction=item.text;

    console.log(SoftwareRestriction);

    
  }

  public async GetAllAllExplicitUsecase() {

    var data = await this._service.GetAllExplicitUsecase();
 
     console.log(data);
 
     var AllExplicitUsecase: any = [];
 
     for (var k in data) {
 
       AllExplicitUsecase.push({ key: data[k].ID, text: data[k].Title});
     }
 
     console.log(AllExplicitUsecase);
 
     
    this.setState({ ExplicitUsecaseItems: AllExplicitUsecase });
   
 
   }
 
   private hadleExplicitUsecase(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {
 
     
     this.setState({ MyExplicitUsecaseValue:item.key });
 
     ExplicitUseCase=item.text;
 
     console.log(ExplicitUseCase);
 
     
   }


   public async GetAllSoftwareScope() {

    var data = await this._service.GetAllSoftwareScope();
 
     console.log(data);
 
     var AllSoftwareScopes: any = [];
 
     for (var k in data) {
 
      AllSoftwareScopes.push({ key: data[k].ID, text: data[k].Title});
     }
 
     console.log(AllSoftwareScopes);
 
     
    this.setState({ SoftwareScopeItems: AllSoftwareScopes });
   
 
   }
 
   private hadleSoftwareScope(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {
 
     
     this.setState({ MySoftwareScopeValue:item.key });
 
     SoftwareScope=item.text;
 
     console.log(SoftwareScope);
 
     
   }


   public async GetAllSoftwareEditions() {

    var data = await this._service.GetAllSoftwareEdition();
 
     console.log(data);
 
     var AllSoftwareEditions: any = [];
 
     for (var k in data) {
 
      AllSoftwareEditions.push({ key: data[k].ID, text: data[k].Title});
     }
 
     console.log(AllSoftwareEditions);
 
     
    this.setState({ SoftwareEditionItems: AllSoftwareEditions });
   
 
   }
 
   private hadleSoftwareEditions(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {
 
     
     this.setState({ MySoftwareEditionValue:item.key });
 
     SoftwareEdition=item.text;
 
     console.log(SoftwareEdition);
 
     
   }


   public async GetAllLicenseTypes() {

    var data = await this._service.GetAllLicenseType();
 
     console.log(data);
 
     var AllLicenseTypes: any = [];
 
     for (var k in data) {
 
      AllLicenseTypes.push({ key: data[k].ID, text: data[k].Title});
     }
 
     console.log(AllLicenseTypes);
 
     
    this.setState({ LicenseTypeItems: AllLicenseTypes });
   
 
   }
 
   private hadleLicenseType(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {
 
     
     this.setState({MyLicenseType:item.key });
 
     LicenseType=item.text;
 
     console.log(LicenseType);
 
     
   }


   public async GetAllDataClassifications() {

    var data = await this._service.GetAllDataClassifications();
 
     console.log(data);
 
     var AllDataClassifications: any = [];
 
     for (var k in data) {
 
      AllDataClassifications.push({ key: data[k].ID, text: data[k].Title});
     }
 
     console.log(AllDataClassifications);
 
     
    this.setState({ DataClassificationsItems: AllDataClassifications });
   
 
   }
 
   private hadleDataClassifications(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {
 
     
     this.setState({ MyDataClassifications:item.key });
 
     DataClassification=item.text;
 
     console.log(DataClassification);
 
     
   }


   public async GetAllRisks() {

    var data = await this._service.GetAllRisks();
 
     console.log(data);
 
     var AllRisks: any = [];
 
     for (var k in data) {
 
      AllRisks.push({ key: data[k].ID, text: data[k].Title});
     }
 
     console.log(AllRisks);
 
     
    this.setState({ RiskItems: AllRisks });
   
 
   }
 
   private hadleRisks(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {
 
     
     this.setState({ MyRiskvalue:item.key });
 
     Risks=item.text;
 
     console.log(Risks);
 
     
   }

   
   public async GetAllDependency() {

    var data = await this._service.GetAllDependency();
 
     console.log(data);
 
     var AllDependency: any = [];
 
     for (var k in data) {
 
      AllDependency.push({ key: data[k].ID, text: data[k].Title});
     }
 
     console.log(AllDependency);
 
     
    this.setState({ DependencyItems: AllDependency });
   
 
   }
 
   private hadleDependency(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {
 
     
     this.setState({ MyDependency:item.key });
 
     Dependency=item.text;
 
     console.log(Dependency);
 
     
   }

   public async GetAllDiscoverySources() {

    var data = await this._service.GetAllDiscoverSource();
 
     console.log(data);
 
     var AllDiscoverSources: any = [];
 
     for (var k in data) {
 
      AllDiscoverSources.push({ key: data[k].ID, text: data[k].Title});
     }
 
     console.log(AllDiscoverSources);
 
     
    this.setState({ DiscoveryItems: AllDiscoverSources });
   
 
   }
 
   private hadleDiscover(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {
 
     
     this.setState({ MyDiscovery:item.key });
 
     DiscoverySource=item.text;
 
     console.log(DiscoverySource);
 
     
   }


   public async GetAllBussinessOwners() {

    var data = await this._service.GetAllBussinessOwner();
 
     console.log(data);
 
     var AllBussinessOwners: any = [];
 
     for (var k in data) {
 
      AllBussinessOwners.push({ key: data[k].ID, text: data[k].Title});
     }
 
     console.log(AllBussinessOwners);
 
     
    this.setState({ BusinessOwnerItems: AllBussinessOwners });
   
 
   }
 
   private hadleBussinessOwner(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {
 
     
     this.setState({ MyBusinessOwner:item.key });
 
     BussinessOwnerText=item.text;
 
     console.log(BussinessOwner);
 
     
   }


  //END

  //Choice 

  public async GetAllAvaliblity() {

    var data = await this._service.GetAllAvaliblity();
 
     console.log(data);
 
     var AllAvaliblity: any = [];
 
     for (var k in data) {
 
      AllAvaliblity.push({ key: data[k].ID, text: data[k].Title});
     }
 
     console.log(AllAvaliblity);
 
     
    this.setState({ AvailabilityItems: AllAvaliblity });
   
 
   }
 
   private hadleAvaliblity(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {
 
     
     this.setState({ MyAvailability:item.key });
 
     AvaliblityText=item.text;
 
     //console.log(CountryName);
 
     
   }

   public async GetAllAuthorizationMethod() {

    var data = await this._service.GetAllAuthorizationMethod();
 
     console.log(data);
 
     var AllAuthorizationMethod: any = [];
 
     for (var k in data) {
 
      AllAuthorizationMethod.push({ key: data[k].ID, text: data[k].Title});
     }
 
     console.log(AllAuthorizationMethod);
 
     
    this.setState({ AuthorizationMethodItems: AllAuthorizationMethod });
   
 
   }
 
   private hadleAuthorizationMethod(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {
 
     
     this.setState({ AuthorizationMethod:item.key });
 
     AuthorizationMethod=item.text;
 
     console.log(AuthorizationMethod);
 
     
   }


   public async GetAllAuthenticationMethod() {

    var data = await this._service.GetAllAuthenticationMethod();
 
     console.log(data);
 
     var AllAuthenticationMethod: any = [];
 
     for (var k in data) {
 
      AllAuthenticationMethod.push({ key: data[k].ID, text: data[k].Title});
     }
 
     console.log(AllAuthenticationMethod);
 
     
    this.setState({ AuthenticationMethodItems: AllAuthenticationMethod });
   
 
   }
 
   private hadleAuthenticationMethod(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {
 
     
     this.setState({ AuthenticationMethod:item.key });
 
     AuthenticationMethod=item.text;
 
     console.log(AuthenticationMethod);
 
     
   }

   public async GetAllDecisionStatus() {

    var data = await this._service.GetAllDecisionStatus();
 
     console.log(data);
 
     var AllDecisionStatus: any = [];
 
     for (var k in data) {
 
      AllDecisionStatus.push({ key: data[k].ID, text: data[k].Title});
     }
 
     console.log(AllDecisionStatus);
 
     
    this.setState({ DecisionStatusItems: AllDecisionStatus });
   
 
   }
 
   private hadleDecisionStatus(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {
 
     
     this.setState({ DecisionStatus:item.key });
 
     DecisionStatus=item.text;
 
     console.log(DecisionStatus);
 
     
   }

   public async GetAllEMPWorkstyle() {

    var data = await this._service.GetAllEMPWorkstyle();
 
     console.log(data);
 
     var AllEMPWorkstyle: any = [];
 
     for (var k in data) {
 
      AllEMPWorkstyle.push({ key: data[k].ID, text: data[k].Title});
     }
 
     console.log(AllEMPWorkstyle);
 
     
    this.setState({ EMPWorkstyleItems: AllEMPWorkstyle });
   
 
   }
 
   private hadleEMPWorkstyle(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {
 
     
     this.setState({ EMPWorkstyle:item.key });
 
     EMPWorkstyle=item.text;
 
     console.log(EMPWorkstyle);
 
     
   }

   public async GetAllEMPPolicy() {

    var data = await this._service.GetAllEMPPolicy();
 
     console.log(data);
 
     var AllEMPPolicy: any = [];
 
     for (var k in data) {
 
      AllEMPPolicy.push({ key: data[k].ID, text: data[k].Title});
     }
 
     console.log(AllEMPPolicy);
 
     
    this.setState({ EMPPolicyItems: AllEMPPolicy });
   
 
   }
 
   private hadleEMPPolicy(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {
 
     
     this.setState({ EMPPolicy:item.key });
 
     EMPPolicy=item.text;
 
     console.log(EMPPolicy);
 
     
   }


   public async GetAllReviewFrequency() {

    var data = await this._service.GetAllReviewFrequency();
 
     console.log(data);
 
     var AllReviewFrequency: any = [];
 
     for (var k in data) {
 
      AllReviewFrequency.push({ key: data[k].ID, text: data[k].Title});
     }
 
     console.log(AllReviewFrequency);
 
     
    this.setState({ ReviewFrequencyItems: AllReviewFrequency });
   
 
   }
 
   private hadleReviewFrequency(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {
 
     
     this.setState({ ReviewFrequency:item.key });
 
     ReviewFrequency=item.text;
 
     console.log(ReviewFrequency);
 
     
   }


   public async GetAllSoftwareMissionCrticalRating() {

    var data = await this._service.GetAllSoftwareMissionCrticalRating();
 
     console.log(data);
 
     var AllSoftwareMissionCrticalRating: any = [];
 
     for (var k in data) {
 
      AllSoftwareMissionCrticalRating.push({ key: data[k].ID, text: data[k].Title});
     }
 
     console.log(AllSoftwareMissionCrticalRating);
 
     
    this.setState({ SoftwareMissionCrticalRatingItems: AllSoftwareMissionCrticalRating });
   
 
   }
 
   private hadleSoftwareMissionCrticalRating(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {
 
     
     this.setState({ SoftwareMissionCrticalRating:item.key });
 
     SoftwareMissionCriticalRating=item.text;
 
     console.log(SoftwareMissionCriticalRating);
 
     
   }

   public async GetAllTypeofAIcapabilities() {

    var data = await this._service.GetAllTypeofAiCapablities();
 
     console.log(data);
 
     var AllSTypeofAIcapabilities: any = [];
 
     for (var k in data) {
 
      AllSTypeofAIcapabilities.push({ key: data[k].ID, text: data[k].Title});
     }
 
     console.log(AllSTypeofAIcapabilities);
 
     
    this.setState({ AiCapablitiesItems: AllSTypeofAIcapabilities });
   
 
   }
 
   private hadleSTypeofAIcapabilities(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {
 
     
     this.setState({ AiCapablities:item.key });
 
     TypeofAIcapabilities=item.text;
 
     console.log(TypeofAIcapabilities);
 
     
   }


   public async GetAllCategories() {

    var data = await this._service.GetAllCategory();
 
     console.log(data);
 
     var AllCategory: any = [];
 
     for (var k in data) {
 
      AllCategory.push({ key: data[k].ID, text: data[k].Title});
     }
 
     console.log(AllCategory);
 
     
    this.setState({ CategoryItems: AllCategory });
   
 
   }
 
   private hadleCategory(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {
 
     
     this.setState({ Category:item.key });
 
     CategoryValue=item.text;
 
     //console.log(CountryName);
 
     
   }

   public async GetAllSoftwareLocation() {

    var data = await this._service.GetAllSoftwareLocation();
 
     console.log(data);
 
     var AllSoftwareLocation: any = [];
 
     for (var k in data) {
 
      AllSoftwareLocation.push({ key: data[k].ID, text: data[k].Title});
     }
 
     console.log(AllSoftwareLocation);
 
     
    this.setState({ SoftwareLocationItems: AllSoftwareLocation });
   
 
   }
 
   private hadleSoftwareLocation(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {
 
     
     this.setState({ SoftwareLocation:item.key });
 
     SoftwareLocation=item.text;
 
     console.log(SoftwareLocation);
 
     
   }

   public async GetAllSystemorTechnicalOwner() {

    var data = await this._service.GetAllSystemORTechnicalOwner();
 
     console.log(data);
 
     var AllSystemORTechnicalOwner: any = [];
 
     for (var k in data) {
 
      AllSystemORTechnicalOwner.push({ key: data[k].ID, text: data[k].Title});
     }
 
     console.log(AllSystemORTechnicalOwner);
 
     
    this.setState({ SystemORTechnicalOwnerItems: AllSystemORTechnicalOwner });
   
 
   }
 
   private hadleSystemorTechnicalOwner(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {
 
     
     this.setState({ SystemORTechnicalOwnerchoice:item.key });
 
     SystemORTechnicalOwnerchoicevalue=item.text;
 
     console.log(SystemORTechnicalOwnerchoicevalue);
 
     
   }


  //END

  
  //Multiline
  private changeDescription(data: any): void {

    this.setState({ Description: data.target.value });


  }

  private changePublisherVendorProvider(data: any): void {

    this.setState({ PublisherVendorProvider: data.target.value });


  }

  private changeSoftwareRestrictionNotes(data: any): void {

    this.setState({ SoftwareRestrictionNotes: data.target.value });


  }

  private changeRiskNotes(data: any): void {

    this.setState({ RiskNotes: data.target.value });


  }

  private changeDecisionNotes(data: any): void {

    this.setState({ DecisionNotes: data.target.value });


  }

  private changeComments(data: any): void {

    this.setState({ Comments: data.target.value });


  }

 //END


 //Date
 private _onSelectReviewDate = (date: Date | null | undefined): void => {
  this.setState({ dtReviewDate: date });
 
 
};

private _onSelectNextReviewDate = (date: Date | null | undefined): void => {
  this.setState({ dtNextReviewDate: date });
 
};

private _onSelectApprovalEndDate = (date: Date | null | undefined): void => {
  this.setState({ dtApprovalEndDate: date });
 
 
};


private _onFormatDate = (date: Date): string => {
  return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

 
};


 //END


 //PP
 private async _getPeoplePickerItemsBussinessOwner(items: any[]) {
  console.log('Items:', items);

  if(items.length>0)
  {

    BussinessOwner = items[0].text;

    let userInfo = this._service.getUserByLogin(items[0].loginName).then((info:any)=>{
    this.setState({BussniessOwenr:info});
    console.log(userInfo)
    console.log(BussinessOwner)
    
});

  }

  else
  {

    this.setState({BussniessOwenr:null});
  }



}

private async _getPeoplePickerItemsSystTechicalOwner(items: any[]) {

  defaultUsers=[];

  let First='';
  let Second='';
  

  for(var count=0;count<items.length;count++)
  {


      let userInfo1 = await this._service.getUserByLogin(items[count].loginName).then((info:any)=>{
      defaultUsers.push(info.Id);
      //BussinesOwnertext.push(info.Email);
      if(items[0]!=null)
      {

        First=items[0].secondaryText;

      }

      if(items[1]!=null)

        {
          Second=items[1].secondaryText;


        }
      
      
      ThirdBussinesowner=First+","+Second;
      myFinalSystemOwner= ThirdBussinesowner.replace(/,(\s+)?$/, '');
      
      //console.log(info);
      console.log(userInfo1);
      console.log(ThirdBussinesowner);
      console.log(myFinalSystemOwner);

 });

 
  }

  console.log(defaultUsers);

  this.setState({SystemownerEmailArray:defaultUsers});











}

private async _getPeoplePickerItemsReviewdBy(items: any[]) {
  console.log('Items:', items);

  if(items.length>0)
  {

    ReviewdBy = items[0].text;

    let userInfo = this._service.getUserByLogin(items[0].loginName).then((info:any)=>{
    this.setState({ReviewedBy:info});
    console.log(ReviewdBy);
    console.log(userInfo);
});

  }

  else
  {

    this.setState({ReviewedBy:null});
  }

  //this.ppl.onChange([]);

}




 private hadleYesNoLicenseReq(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {

    
  this.setState({ MyyesNoLiceReq:item.key });

  
}

private hadleYesNoAICap(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {

    
  this.setState({ MyYesnoAICap:item.key });

  
}

 //END


 public ToggleHide(ev: React.FormEvent<HTMLInputElement>, option: any): void {  

  this.setState({  

   ToggleHidevalue: option.key  

  });  

  MyToogleValue=option.text;

} 


 public  getParam( name:any )
  {
   name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
   var regexS = "[\\?&]"+name+"=([^&#]*)";
   var regex = new RegExp( regexS );
   var results = regex.exec(window.location.href);
   if( results == null )
   return "";
   else
   return results[1];
  }
  

 //Save Btn

 private OnBtnClick():void
 {

  if(this.state.SoftwareTitle=='')
    {

      alert('Please enter Software Title')
    }

     else if(this.state.Category=='')
      {

      alert('Please select Category')
      }

  else if(this.state.MyAvailability=='')
  {

  alert('Please select Availability')
  }

  else if(this.state.Description=='')
  {

  alert('Please enter Description')
  }

  else if(this.state.MyExplicitUsecaseValue=='')
   {
     alert('please select ExplicitUsecase')

  }
  
  else if(this.state.MySoftwareRestrictionValue=='')
  {

  alert('please select Software Restriction')
  }

   else if(this.state.SoftwareRestrictionNotes=='')
  {

   alert('please enter Software Restriction Notes')
  }

  else if(this.state.PublisherVendorProvider=='')
  {

  alert('please enter Publisher/Vendor/Provider')

   } 
   else if(this.state.MySoftwareScopeValue=='')
  {

   alert('please select Software Scope')
  }

  else if(this.state.MySoftwareEditionValue=='')
  {
  
   alert('please select Software Edition')
  }

  else if(this.state.MyyesNoLiceReq=='')
  {
    
  alert('please select License Requirement')
  }

  else if(this.state.MyLicenseType=='')
   {
      
          alert('please select License Type')
  }
    
   else if(this.state.MyYesnoAICap=='')
    {
        
      alert('please select Any AI capabilities')
   }

    else if(this.state.AiCapablities=='')
     {
          
      alert('please select Type of AI capabilities')
       }

   else if(this.state.MyDependency=='')
    {
            
        alert('please select Dependency')
  }

       else if(this.state.MyDataClassifications=='')
         {
              
        alert('please select DataClassifications')
         }


       else if(this.state.SoftwareMissionCrticalRating=='')
       {
                
             alert('please select Software Mission CrticalRating')
       }

          else if(this.state.MyRiskvalue=='')
           {
                  
              alert('please select Risks')
            }

               else if(this.state.RiskNotes=='')
                {
                    
                alert('please enter Risk Notes')
               }

               else if(this.state.AuthenticationMethod=='')
                {
                      
                  alert('please select Authentication Method')
                  }

                else if(this.state.AuthorizationMethod=='')
                   {
                        
                  alert('please select Authorization Method')
                   }
        
    
                    else if(this.state.MyDiscovery=='')
                     {
                          
                    alert('please select Discovery Source')
                    }


                       else if(this.state.MyBusinessOwner=='')
                          {
                              
                          alert('please select Business Owner')
                        }

                        else if(this.state.BussniessOwenr=='')
                         {
                                
                           alert('please select Business Owner Name')
                           }

                           else if(this.state.SystemORTechnicalOwnerchoice=='')
                           {
                                  
                          alert('please select System/Technical Owner')
                             }


                               else if(myFinalSystemOwner=='')

                                {

                                  alert('please select System/Technical Owner Name/s')


                                  }


                               else if(this.state.DecisionStatus=='')
                                 {
                                      
                                alert('please select Decision Status')
                                   }


                                  else if(this.state.DecisionNotes=='')
                                   {
                                        
                                   alert('please enter Decision Notes')
                                   }

                                            
                                  else if(this.state.dtReviewDate=='')
                                   {
                                        
                                   alert('please select  Review Date')
                                    }


                                   else if(this.state.ReviewedBy=='')
                                     {
                                          
                                     alert('please select Review By')
                                      }


                                     else if(this.state.ReviewFrequency=='')
                                        {
                                            
                                        alert('please select Review Frequency')
                                       }


                                       else if(this.state.dtNextReviewDate=='')
                                         {
                                              
                                           alert('please select Next Review Date')
                                          }

                                         else if(this.state.dtNextReviewDate=='')
                                           {
                                                
                                         alert('please select Next Review Date')
                                           }

                                            else if(this.state.dtApprovalEndDate=='')
                                              {
                                                  
                                            alert('please select Approval End Date')
                                              }


                                              else if(this.state.EMPPolicy=='')
                                                 {
                                                    
                                               alert('please select EMP Policy')
                                               }

                                               else if(this.state.EMPWorkstyle=='')
                                                 {
                                                      
                                                   alert('please select EMP Workstyle')
                                                   }
    

                                                  else if(this.state.RiskManagement=='')
                                                     {
                                                        
                                                   alert('please enter Risk Management Tracker Reference ')
                                                   }
      

                                                    else if(this.state.SNOWReference=='')
                                                {
                                                          
                                                     alert('please enter SNOW Reference ')
                                                    }

                                                   else if(this.state.JiraReference=='')
                                                      {
                                                            
                                                    alert('please enter Jira Reference')
                                                        }


                                                         else if(this.state.SoftwareLocation=='')
                                                          {
                                                              
                                                           alert('please select software location')
                                                        }

                                                        else if(this.state.Comments=='')
                                                           {
                                                                
                                                             alert('please enter Comments')
                                                           }


                                                          else if(this.state.ToggleHidevalue=='')
                                                         {

                                                             alert('Do you want to hide the Software')
                                                           }


                                                                      else
                                                                    {

                                                                     // {this.state.showupdatebutton:false}

                                                                      this.setState({ showupdatebutton: true});
                                                                      this.setState({ showSavebutton: true});



                                                                      let date1=(this.state.dtReviewDate.getDate());

                                                                      console.log(date1);

                                                                   let month1= (this.state.dtReviewDate.getMonth()+1);

                                                                   let year1 =(this.state.dtReviewDate.getFullYear());

                                                                  FinalReviewDate=month1+'/'+date1+'/' +year1;

                                                                   console.log(FinalReviewDate);
                                                                 let date2=(this.state.dtNextReviewDate.getDate());

                                                                 console.log(date2);

                                                              let month2= (this.state.dtNextReviewDate.getMonth()+1);
                                                              console.log(month2);
                                                             let year2 =(this.state.dtNextReviewDate.getFullYear());

                                                             console.log(year2);
                                                             FinalNextReviewDate=month2+'/'+date2+'/' +year2;
                                                             console.log(FinalNextReviewDate);

                                                            let date3=(this.state.dtApprovalEndDate.getDate());

                                                            console.log(date3);

                                                         let month3= (this.state.dtApprovalEndDate.getMonth()+1);
                                                         console.log(month3);
                                                        let year3 =(this.state.dtApprovalEndDate.getFullYear());

                                                         console.log(year3);
                                                        FinalApprovalDate=month2+'/'+date3 +'/' +year2;
                                                        console.log(FinalApprovalDate);

                                                        const categorynumber = Number(this.state.Category);
                                                        const Avaliblitynumber=Number(this.state.MyAvailability);
                                                        const ExplicitUsecaseKeynumber=Number(this.state.MyExplicitUsecaseValue);
                                                        const SoftwareRestrictionKey=Number(this.state.MySoftwareRestrictionValue);
                                                        const SoftwareScopeKey=Number(this.state.MySoftwareScopeValue);
                                                        const SoftwareEditionkey=Number(this.state.MySoftwareEditionValue);
                                                        const LicenseTypekey=Number(this.state.MyLicenseType);
                                                        const TypeofAIcapabilitieskey=Number(this.state.AiCapablities);
                                                        const MyDependencykey=Number(this.state.MyDependency);
                                                        const MyDataClassificationKey=Number(this.state.MyDataClassifications);
                                                        const MySoftwareMissionCriticalRatingkey=Number(this.state.SoftwareMissionCrticalRating);
                                                        const MyRisksKey=Number(this.state.MyRiskvalue);
                                                        const MyAuthenticationMethodKey=Number(this.state.AuthenticationMethod);
                                                        const MyAuthorizationMethodkey=Number(this.state.AuthorizationMethod);
                                                        const MyDiscoverySourcekey=Number(this.state.MyDiscovery);
                                                        const MyBusinessOwnerKey=Number(this.state.MyBusinessOwner);
                                                        const MySystemorTechnicalOwnerChoicekey=Number(this.state.SystemORTechnicalOwnerchoice);
                                                        const MyDecisionStatuskey=Number(this.state.DecisionStatus);
                                                        const MyReviewFrequencyKey=Number(this.state.ReviewFrequency);
                                                        const MyEMPPolicyKey=Number(this.state.EMPPolicy);
                                                        const MyEMPWorkstyleKey=Number(this.state.EMPWorkstyle);


                                                        const MySoftwareLocationKey=Number(this.state.SoftwareLocation);

                                                                      this._service.Save(

                                                                        //1-11

                                                                        this.state.SoftwareTitle,
                                                                        CategoryValue,
                                                                        categorynumber,
                                                                        AvaliblityText,
                                                                        Avaliblitynumber,

                                                                      this.state.Description,
                                                                      ExplicitUseCase,
                                                                      ExplicitUsecaseKeynumber,
                                                                      SoftwareRestriction,
                                                                      SoftwareRestrictionKey,
                                                                      this.state.SoftwareRestrictionNotes,
                                                                      this.state.PublisherVendorProvider,
                                                                      SoftwareScope,
                                                                      SoftwareScopeKey,
                                                                      SoftwareEdition,
                                                                      SoftwareEditionkey,
                                                                      this.state.MyyesNoLiceReq,
                                                                      //   //END

                                                                      //   //12-20
                                                                      LicenseType,
                                                                      LicenseTypekey,
                                                                      this.state.MyYesnoAICap,
                                                                      TypeofAIcapabilities,
                                                                      TypeofAIcapabilitieskey,
                                                                      Dependency,
                                                                      MyDependencykey,
                                                                      DataClassification,
                                                                      MyDataClassificationKey,
                                                                      SoftwareMissionCriticalRating,
                                                                      MySoftwareMissionCriticalRatingkey,
                                                                               Risks,
                                                                               MyRisksKey,
                                                                      this.state.RiskNotes,
                                                                      AuthenticationMethod,
                                                                      MyAuthenticationMethodKey,
                                                                      AuthorizationMethod,
                                                                      MyAuthorizationMethodkey,
                                                                      DiscoverySource,
                                                                      MyDiscoverySourcekey,
                                                                      DecisionStatus,
                                                                      MyDecisionStatuskey,
                                                                      //   //END

                                                                      //   //21-30
                                                                     
                                                                      this.state.DecisionNotes,
                                                                      FinalReviewDate,
                                                                      // //END
                                                                      //  //31-40
                                                                      ReviewFrequency,
                                                                      MyReviewFrequencyKey,
                                                                     FinalNextReviewDate,
                                                                     FinalApprovalDate,

                                                                      EMPPolicy,
                                                                      MyEMPPolicyKey,
                                                                   
                                                                      EMPWorkstyle,
                                                                      MyEMPWorkstyleKey,

                                                                      this.state.RiskManagement,
                                                                      this.state.SNOWReference,
                                                                      this.state.JiraReference,

                                                                      SoftwareLocation,
                                                                      MySoftwareLocationKey,

                                                                      this.state.Comments,
                                                                      MyToogleValue,

                                                                      BussinessOwnerText,
                                                                      MyBusinessOwnerKey,

                                                                      //   //END
                                                                      //   //Missed

                                                                      //PPL
                                                                     
                                                                      (this.state.BussniessOwenr == null ? 0:this.state.BussniessOwenr.Id),
                                                                      (this.state.ReviewedBy == null ? 0:this.state.ReviewedBy.Id),
                                                                      //END

                                                                      //Last 2
                                                                      SystemORTechnicalOwnerchoicevalue,
                                                                      MySystemorTechnicalOwnerChoicekey,

                                                                      //END
                                                                        
                                                                      //PPL
                                                                      (this.state.SystemownerEmailArray),
                                                                      myFinalSystemOwner,
                                                                      
                                                                      //   //END
                                                                      //   //KEYS
                                                                     
                                                                    
                                                                      
                       
                                                                    ).then(function (data:any)
                                                                    {
                                                                
                                                                      console.log(data);
                                                          
                                                                      
                                                            
                                                                     alert('Record submitted successfully ');
                                                                     window.location.replace("https://capcoinc.sharepoint.com/sites/CapcoSoftwareCatalogue/");
                                                        
                                                                      
                                                                      
                                                                    });
                                                                      
                                                                      }

                                                                    


                                                                      
                                                                    
   


 }

  private OnBtnUpdateClick():void
 {

  if(this.state.SoftwareTitle=='')
    {

      alert('Please enter Software Title')
    }

     else if(this.state.Category=='')
      {

      alert('Please select Category')
      }

  else if(this.state.MyAvailability=='')
  {

  alert('Please select Availability')
  }

  else if(this.state.Description=='')
  {

  alert('Please enter Description')
  }

  else if(this.state.MyExplicitUsecaseValue=='')
   {
     alert('please select ExplicitUsecase')

  }
  
  else if(this.state.MySoftwareRestrictionValue=='')
  {

  alert('please select Software Restriction')
  }

   else if(this.state.SoftwareRestrictionNotes=='')
  {

   alert('please enter Software Restriction Notes')
  }

  else if(this.state.PublisherVendorProvider=='')
  {

  alert('please enter Publisher/Vendor/Provider')

   } 
   else if(this.state.MySoftwareScopeValue=='')
  {

   alert('please select Software Scope')
  }

  else if(this.state.MySoftwareEditionValue=='')
  {
  
   alert('please select Software Edition')
  }

  else if(this.state.MyyesNoLiceReq=='')
  {
    
  alert('please select License Requirement')
  }

  else if(this.state.MyLicenseType=='')
   {
      
          alert('please select License Type')
  }
    
   else if(this.state.MyYesnoAICap=='')
    {
        
      alert('please select Any AI capabilities')
   }

    else if(this.state.AiCapablities=='')
     {
          
      alert('please select Type of AI capabilities')
       }

   else if(this.state.MyDependency=='')
    {
            
        alert('please select Dependency')
  }

       else if(this.state.MyDataClassifications=='')
         {
              
        alert('please select DataClassifications')
         }


       else if(this.state.SoftwareMissionCrticalRating=='')
       {
                
             alert('please select Software Mission CrticalRating')
       }

          else if(this.state.MyRiskvalue=='')
           {
                  
              alert('please select Risks')
            }

               else if(this.state.RiskNotes=='')
                {
                    
                alert('please enter Risk Notes')
               }

               else if(this.state.AuthenticationMethod=='')
                {
                      
                  alert('please select Authentication Method')
                  }

                else if(this.state.AuthorizationMethod=='')
                   {
                        
                  alert('please select Authorization Method')
                   }
        
    
                    else if(this.state.MyDiscovery=='')
                     {
                          
                    alert('please select Discovery Source')
                    }


                       else if(this.state.MyBusinessOwner=='')
                          {
                              
                          alert('please select Business Owner')
                        }

                        else if(this.state.BussniessOwenr=='')
                         {
                                
                           alert('please select Business Owner Name')
                           }

                           else if(this.state.SystemORTechnicalOwnerchoice=='')
                           {
                                  
                          alert('please select System/Technical Owner')
                             }


                              //  else if(myFinalSystemOwner=='')

                              //   {

                              //     alert('please select System/Technical Owner Name/s')


                              //     }


                               else if(this.state.DecisionStatus=='')
                                 {
                                      
                                alert('please select Decision Status')
                                   }


                                  else if(this.state.DecisionNotes=='')
                                   {
                                        
                                   alert('please enter Decision Notes')
                                   }

                                            
                                  else if(this.state.dtReviewDate=='')
                                   {
                                        
                                   alert('please select  Review Date')
                                    }


                                   else if(this.state.ReviewedBy=='')
                                     {
                                          
                                     alert('please select Review By')
                                      }


                                     else if(this.state.ReviewFrequency=='')
                                        {
                                            
                                        alert('please select Review Frequency')
                                       }


                                       else if(this.state.dtNextReviewDate=='')
                                         {
                                              
                                           alert('please select Next Review Date')
                                          }

                                         else if(this.state.dtNextReviewDate=='')
                                           {
                                                
                                         alert('please select Next Review Date')
                                           }

                                            else if(this.state.dtApprovalEndDate=='')
                                              {
                                                  
                                            alert('please select Approval End Date')
                                              }


                                              else if(this.state.EMPPolicy=='')
                                                 {
                                                    
                                               alert('please select EMP Policy')
                                               }

                                               else if(this.state.EMPWorkstyle=='')
                                                 {
                                                      
                                                   alert('please select EMP Workstyle')
                                                   }
    

                                                  else if(this.state.RiskManagement=='')
                                                     {
                                                        
                                                   alert('please enter Risk Management Tracker Reference ')
                                                   }
      

                                                    else if(this.state.SNOWReference=='')
                                                {
                                                          
                                                     alert('please enter SNOW Reference ')
                                                    }

                                                   else if(this.state.JiraReference=='')
                                                      {
                                                            
                                                    alert('please enter Jira Reference')
                                                        }


                                                         else if(this.state.SoftwareLocation=='')
                                                          {
                                                              
                                                           alert('please select software location')
                                                        }

                                                        else if(this.state.Comments=='')
                                                           {
                                                                
                                                             alert('please enter Comments')
                                                           }


                                                          else if(this.state.ToggleHidevalue=='')
                                                         {

                                                             alert('Do you want to hide the Software')
                                                           }


                                                                     else
                                                                    {

                                                                      this.setState({ showupdatebutton: true});
                                                                      this.setState({ showSavebutton: true});


                                                                      let date4=(this.state.dtReviewDate.getDate());

                                                                      console.log(date4);

                                                                   let month1= (this.state.dtReviewDate.getMonth()+1);

                                                                   let year1 =(this.state.dtReviewDate.getFullYear());

                                                                  FinalReviewDate=month1+'/'+date4 +'/' +year1;

                                                                   console.log(FinalReviewDate);


                                                                 let date5=(this.state.dtNextReviewDate.getDate());

                                                                 console.log(date5);

                                                              let month2= (this.state.dtNextReviewDate.getMonth()+1);
                                                              console.log(month2);
                                                             let year2 =(this.state.dtNextReviewDate.getFullYear());

                                                            console.log(year2);
                                                             FinalNextReviewDate=month2+'/'+date5 +'/' +year2;
                                                             console.log(FinalNextReviewDate);


                                                            let date6=(this.state.dtApprovalEndDate.getDate());

                                                            console.log(date6);

                                                         let month3= (this.state.dtApprovalEndDate.getMonth()+1);
                                                         console.log(month3);
                                                        let year3 =(this.state.dtApprovalEndDate.getFullYear());

                                                         console.log(year3);
                                                        FinalApprovalDate=month2+'/'+date6 +'/' +year2;
                                                        console.log(FinalApprovalDate);

                                                         const categorynumber = Number(this.state.Category);
                                                         const Avaliblitynumber=Number(this.state.MyAvailability);
                                                         const ExplicitUsecaseKeynumber=Number(this.state.MyExplicitUsecaseValue);
                                                         const SoftwareRestrictionKey=Number(this.state.MySoftwareRestrictionValue);
                                                         const SoftwareScopeKey=Number(this.state.MySoftwareScopeValue);
                                                         const SoftwareEditionkey=Number(this.state.MySoftwareEditionValue);
                                                         const LicenseTypekey=Number(this.state.MyLicenseType);
                                                         const TypeofAIcapabilitieskey=Number(this.state.AiCapablities);
                                                         const MyDependencykey=Number(this.state.MyDependency);
                                                         const MyDataClassificationKey=Number(this.state.MyDataClassifications);
                                                         const MySoftwareMissionCriticalRatingkey=Number(this.state.SoftwareMissionCrticalRating);
                                                         const MyRisksKey=Number(this.state.MyRiskvalue);
                                                         const MyAuthenticationMethodKey=Number(this.state.AuthenticationMethod);
                                                         const MyAuthorizationMethodkey=Number(this.state.AuthorizationMethod);
                                                         const MyDiscoverySourcekey=Number(this.state.MyDiscovery);
                                                         const MyBusinessOwnerKey=Number(this.state.MyBusinessOwner);
                                                         const MySystemorTechnicalOwnerChoicekey=Number(this.state.SystemORTechnicalOwnerchoice);
                                                         const MyDecisionStatuskey=Number(this.state.DecisionStatus);
                                                         const MyReviewFrequencyKey=Number(this.state.ReviewFrequency);
                                                         const MyEMPPolicyKey=Number(this.state.EMPPolicy);
                                                         const MyEMPWorkstyleKey=Number(this.state.EMPWorkstyle);
                                                         const MySoftwareLocationKey=Number(this.state.SoftwareLocation);
                                                        

                                                         const RecordId=Number(myitemId);

                                                                      this._service.Update(

                                                                        //1-11
                                                                        RecordId,
                                                                         this.state.SoftwareTitle,
                                                                        CategoryValue,
                                                                        categorynumber,
                                                                        AvaliblityText,
                                                                        Avaliblitynumber,

                                                                      this.state.Description,
                                                                      ExplicitUseCase,
                                                                      ExplicitUsecaseKeynumber,
                                                                      SoftwareRestriction,
                                                                      SoftwareRestrictionKey,
                                                                      this.state.SoftwareRestrictionNotes,
                                                                      this.state.PublisherVendorProvider,
                                                                      SoftwareScope,
                                                                      SoftwareScopeKey,
                                                                      SoftwareEdition,
                                                                      SoftwareEditionkey,
                                                                      this.state.MyyesNoLiceReq,
                                                                      //   //END

                                                                      //   //12-20
                                                                      LicenseType,
                                                                      LicenseTypekey,
                                                                      this.state.MyYesnoAICap,
                                                                      TypeofAIcapabilities,
                                                                      TypeofAIcapabilitieskey,
                                                                      Dependency,
                                                                      MyDependencykey,
                                                                      DataClassification,
                                                                      MyDataClassificationKey,
                                                                      SoftwareMissionCriticalRating,
                                                                      MySoftwareMissionCriticalRatingkey,
                                                                               Risks,
                                                                               MyRisksKey,
                                                                      this.state.RiskNotes,
                                                                      AuthenticationMethod,
                                                                      MyAuthenticationMethodKey,
                                                                      AuthorizationMethod,
                                                                      MyAuthorizationMethodkey,
                                                                      DiscoverySource,
                                                                      MyDiscoverySourcekey,
                                                                      DecisionStatus,
                                                                      MyDecisionStatuskey,
                                                                      //   //END

                                                                      //   //21-30
                                                                     
                                                                      this.state.DecisionNotes,
                                                                      FinalReviewDate,
                                                                      // //END
                                                                      //  //31-40
                                                                      ReviewFrequency,
                                                                      MyReviewFrequencyKey,
                                                                     FinalNextReviewDate,
                                                                    FinalApprovalDate,

                                                                      EMPPolicy,
                                                                      MyEMPPolicyKey,
                                                                   
                                                                      EMPWorkstyle,
                                                                      MyEMPWorkstyleKey,

                                                                      this.state.RiskManagement,
                                                                      this.state.SNOWReference,
                                                                      this.state.JiraReference,

                                                                      SoftwareLocation,
                                                                      MySoftwareLocationKey,

                                                                      this.state.Comments,
                                                                      MyToogleValue,

                                                                      BussinessOwner,
                                                                      MyBusinessOwnerKey,

                                                                      //   //END
                                                                      //   //Missed

                                                                      //PPL
                                                                     
                                                                      (this.state.BussniessOwenr == null ? 0:this.state.BussniessOwenr.Id),
                                                                      (this.state.ReviewedBy == null ? 0:this.state.ReviewedBy.Id),
                                                                      //END

                                                                      //Last 2
                                                                      SystemORTechnicalOwnerchoicevalue,
                                                                      MySystemorTechnicalOwnerChoicekey,

                                                                      //END
                                                                        
                                                                      //PPL

                                                                      //problem
                                                                      this.state.SystemownerEmailArray,
                                                                      myFinalSystemOwner,

                                                                        
                                              
                                                                    ).then(function (data:any)
                                                                    {
                                                                
                                                                      console.log(data);
                                                          
                                                                      
                                                            
                                                                     alert('Record updated successfully ');
                                                                     window.location.replace("https://capcoinc.sharepoint.com/sites/CapcoSoftwareCatalogue/");
                                                                                                                            
                                                                      
                                                                      
                                                                    });
                                                                      
                                                                      }

 }


    public render(): React.ReactElement<ISoftwarecatlogue2025Props> {
      return (
       
        <Stack tokens={stackTokens} styles={stackStyles} >
        <Stack>

      <b><label className={styles.labelsFonts}>1. Software Title <label className={styles.recolorss}>*</label></label></b><br/>  
      <input type="text" className={styles.boxsize} name="txtsoftwareTitle" value={this.state.SoftwareTitle} onChange={this.changesoftwareTitle.bind(this)}/><br></br>
      <b><label className={styles.labelsFonts}>2. Category <label className={styles.recolorss}>*</label></label></b><br/> 
      <Dropdown className={styles.onlyFont}
  placeholder="Select  Category"
  options={this.state.CategoryItems}
  styles={dropdownStyles}
  selectedKey={this.state.Category ? this.state.Category : undefined} onChange={this.hadleCategory.bind(this)} />
  <br></br> 

      
      <b><label className={styles.labelsFonts}>3. Availability <label className={styles.recolorss}>*</label></label></b><br/>  
      
      <Dropdown className={styles.onlyFont}
  placeholder="Select  Avaliblity"
  options={this.state.AvailabilityItems}
  styles={dropdownStyles}
  selectedKey={this.state.MyAvailability ? this.state.MyAvailability : undefined} onChange={this.hadleAvaliblity.bind(this)} />
  <br></br>

      <b><label className={styles.labelsFonts}>4. Description <label className={styles.recolorss}>*</label></label></b><br/> 
      <textarea name="txtdescription" value={this.state.Description} onChange={this.changeDescription.bind(this)} className={styles.boxsize1}/><br></br> 
      
      <b><label className={styles.labelsFonts}>5. Explicit Use-case <label className={styles.recolorss}>*</label></label></b><br/> 
      
      <Dropdown className={styles.onlyFont}
  placeholder="Select  Explicit Use case"
  options={this.state.ExplicitUsecaseItems}
  styles={dropdownStyles}
  selectedKey={this.state.MyExplicitUsecaseValue ? this.state.MyExplicitUsecaseValue : undefined} onChange={this.hadleExplicitUsecase.bind(this)} />
  <br></br>

      <b><label className={styles.labelsFonts}>6. Software Restriction <label className={styles.recolorss}>*</label></label></b><br/>

  <Dropdown className={styles.onlyFont}
  placeholder="Select  Software  Restriction"
  options={this.state.SoftwareRestrictionItems}
  styles={dropdownStyles}
  selectedKey={this.state.MySoftwareRestrictionValue ? this.state.MySoftwareRestrictionValue : undefined} onChange={this.hadleSoftwareRestriction.bind(this)} />
  <br></br>


      <b><label className={styles.labelsFonts}>7. Software Restriction Notes <label className={styles.recolorss}>*</label></label></b><br/>
      <textarea name="txtSoftwareRestrictionNotes" value={this.state.SoftwareRestrictionNotes} onChange={this.changeSoftwareRestrictionNotes.bind(this)} className={styles.boxsize1}/><br></br> 

      <b><label className={styles.labelsFonts}>8. Publisher/Vendor/Provider <label className={styles.recolorss}>*</label></label></b><br/>
      <textarea name="txtPublisherVendorProvider" value={this.state.PublisherVendorProvider} onChange={this.changePublisherVendorProvider.bind(this)} className={styles.boxsize}/><br></br> 

      <b><label className={styles.labelsFonts}>9. Software Scope <label className={styles.recolorss}>*</label></label></b><br/>
      
      <Dropdown className={styles.onlyFont}
  placeholder="Select  Software  Scope"
  options={this.state.SoftwareScopeItems}
  styles={dropdownStyles}
  selectedKey={this.state.MySoftwareScopeValue ? this.state.MySoftwareScopeValue : undefined} onChange={this.hadleSoftwareScope.bind(this)} />
  <br></br>

    <b><label className={styles.labelsFonts}>10. Software Edition <label className={styles.recolorss}>*</label></label></b><br/>
    <Dropdown className={styles.onlyFont}
  placeholder="Select  Software  Edition"
  options={this.state.SoftwareEditionItems}
  styles={dropdownStyles}
  selectedKey={this.state.MySoftwareEditionValue ? this.state.MySoftwareEditionValue : undefined} onChange={this.hadleSoftwareEditions.bind(this)} />
  <br></br>

      <b><label className={styles.labelsFonts}>11. License Requirement <label className={styles.recolorss}>*</label></label></b><br/>

<ChoiceGroup  id="rdblicreq"  name="rdbliceReq"  options={RadioLiceseRequirment}   onChange={this.hadleYesNoLicenseReq.bind(this)}  selectedKey={this.state.MyyesNoLiceReq}/> 
<br></br>


<b><label className={styles.labelsFonts}>12. License Type <label className={styles.recolorss}>*</label></label></b><br/>

  <Dropdown className={styles.onlyFont}
  placeholder="Select  License Type"
  options={this.state.LicenseTypeItems}
  styles={dropdownStyles}
  selectedKey={this.state.MyLicenseType ? this.state.MyLicenseType : undefined} onChange={this.hadleLicenseType.bind(this)} />
  <br></br>

<b><label className={styles.labelsFonts}>13. Any AI capabilities <label className={styles.recolorss}>*</label></label></b><br/>

<ChoiceGroup  id="Toggle"  name="AnyAICapablties"   options={RadioAICapblities}   onChange={this.hadleYesNoAICap.bind(this)}  selectedKey={this.state.MyYesnoAICap}/> 
<br></br>

     
      <b><label className={styles.labelsFonts}>14. Type of AI capabilities <label className={styles.recolorss}>*</label></label></b><br/>
      <Dropdown className={styles.onlyFont}
  placeholder="Select  Type of AI Capalities"
  options={this.state.AiCapablitiesItems}
  styles={dropdownStyles}
  selectedKey={this.state.AiCapablities ? this.state.AiCapablities : undefined} onChange={this.hadleSTypeofAIcapabilities.bind(this)} />
  <br></br>

      <b><label className={styles.labelsFonts}>15. Dependency <label className={styles.recolorss}>*</label></label></b><br/>
      <Dropdown className={styles.onlyFont}
  placeholder="Select  Dependency"
  options={this.state.DependencyItems}
  styles={dropdownStyles}
  selectedKey={this.state.MyDependency ? this.state.MyDependency : undefined} onChange={this.hadleDependency.bind(this)} />
  <br></br>

  
      <b><label className={styles.labelsFonts}>16. Data Classification <label className={styles.recolorss}>*</label></label></b><br/>
      
      <Dropdown className={styles.onlyFont}
  placeholder="Select  DataClassifications"
  options={this.state.DataClassificationsItems}
  styles={dropdownStyles}
  selectedKey={this.state.MyDataClassifications ? this.state.MyDataClassifications : undefined} onChange={this.hadleDataClassifications.bind(this)} />
  <br></br>


      <b><label className={styles.labelsFonts}>17. Software Mission Critical Rating  <label className={styles.recolorss}>*</label></label></b><br/>

      <Dropdown className={styles.onlyFont}
  placeholder="Select  Software Mission Critical Rating"
  options={this.state.SoftwareMissionCrticalRatingItems}
  styles={dropdownStyles}
  selectedKey={this.state.SoftwareMissionCrticalRating ? this.state.SoftwareMissionCrticalRating : undefined} onChange={this.hadleSoftwareMissionCrticalRating.bind(this)} />
  <br></br>

      <b><label className={styles.labelsFonts}>18. Risks <label className={styles.recolorss}>*</label></label></b><br/>
      <Dropdown className={styles.onlyFont}
  placeholder="Select  Risks"
  options={this.state.RiskItems}
  styles={dropdownStyles}
  selectedKey={this.state.MyRiskvalue ? this.state.MyRiskvalue : undefined} onChange={this.hadleRisks.bind(this)} />
  <br></br>



      <b><label className={styles.labelsFonts}>19. Risk Notes  <label className={styles.recolorss}>*</label></label></b><br/>
      <textarea name="txtRiskNotes" value={this.state.RiskNotes} onChange={this.changeRiskNotes.bind(this)} className={styles.boxsize1}/><br></br> 

      <b><label className={styles.labelsFonts}>20. Authentication Method <label className={styles.recolorss}>*</label></label></b><br/>
      <Dropdown className={styles.onlyFont}
  placeholder="Select  AuthenticationMethod"
  options={this.state.AuthenticationMethodItems}
  styles={dropdownStyles}
  selectedKey={this.state.AuthenticationMethod ? this.state.AuthenticationMethod : undefined} onChange={this.hadleAuthenticationMethod.bind(this)} />
  <br></br>

      <b><label className={styles.labelsFonts}>21. Authorization Method <label className={styles.recolorss}>*</label></label></b><br/>
      <Dropdown className={styles.onlyFont}
  placeholder="Select  AuthorizationMethod"
  options={this.state.AuthorizationMethodItems}
  styles={dropdownStyles}
  selectedKey={this.state.AuthorizationMethod ? this.state.AuthorizationMethod : undefined} onChange={this.hadleAuthorizationMethod.bind(this)} />
  <br></br>


      <b><label className={styles.labelsFonts}>22. Discovery Source <label className={styles.recolorss}>*</label></label></b><br/>
      <Dropdown className={styles.onlyFont}
  placeholder="Select  Discovery Source"
  options={this.state.DiscoveryItems}
  styles={dropdownStyles}
  selectedKey={this.state.MyDiscovery ? this.state.MyDiscovery : undefined} onChange={this.hadleDiscover.bind(this)} />
  <br></br>

      <b><label className={styles.labelsFonts}>23. Business Owner <label className={styles.recolorss}>*</label></label></b><br/>

      <Dropdown className={styles.onlyFont}
  placeholder="Select  Bussiness Owner"
  options={this.state.BusinessOwnerItems}
  styles={dropdownStyles}
  selectedKey={this.state.MyBusinessOwner ? this.state.MyBusinessOwner : undefined} onChange={this.hadleBussinessOwner.bind(this)} />
  <br></br>

      <b><label className={styles.labelsFonts}>24. Business Owner Name <label className={styles.recolorss}>*</label></label></b><br/>
<div className={styles.boxsize}> 
      <PeoplePicker 
                  context={this.props.context}
                  //titleText="User Name"
                  personSelectionLimit={1}
                  showtooltip={true}
                  required={true}
                  disabled={false}
                  onChange={this._getPeoplePickerItemsBussinessOwner.bind(this)}
                  webAbsoluteUrl='https://capcoinc.sharepoint.com/sites/CapcoSoftwareCatalogue/'
                  showHiddenInUI={false}
                  principalTypes={[PrincipalType.User]}
                  defaultSelectedUsers={(this.state.BussniessOwenr && this.state.BussniessOwenr.length) ? [this.state.BussniessOwenr] : []}
                  //ref={c => (this.ppl = c)} 
                  resolveDelay={1000} />  
              </div>
      <div className={styles.boxsize}>

      </div><br></br>

      <b><label className={styles.labelsFonts}>25. System/Technical Owner <label className={styles.recolorss}>*</label></label></b><br/>

      <Dropdown className={styles.onlyFont}
  placeholder="Select System/Technical Owner"
  options={this.state.SystemORTechnicalOwnerItems}
  styles={dropdownStyles}
  selectedKey={this.state.SystemORTechnicalOwnerchoice ? this.state.SystemORTechnicalOwnerchoice : undefined} onChange={this.hadleSystemorTechnicalOwner.bind(this)} />
  <br></br>

      <b><label className={styles.labelsFonts}>26. System/Technical Owner Name/s <label className={styles.recolorss}>*</label></label></b><br/>
      <div className={styles.boxsize}>

      <PeoplePicker 
                  context={this.props.context}
                  //titleText="User Name"
                  personSelectionLimit={2}
                  showtooltip={true}
                  required={true}
                  disabled={false}
                  onChange={this._getPeoplePickerItemsSystTechicalOwner.bind(this)}
                  webAbsoluteUrl='https://capcoinc.sharepoint.com/sites/CapcoSoftwareCatalogue/'
                  showHiddenInUI={false}
                  principalTypes={[PrincipalType.User]}
                  defaultSelectedUsers={(this.state.SystemorTechownerpp && this.state.SystemorTechownerpp.length) ? [this.state.SystemorTechownerpp] : []}
                  //ref={c => (this.ppl = c)} 
                  resolveDelay={1000} />  
      
      </div>
<br></br>
      <b><label className={styles.labelsFonts}>27. Decision Status <label className={styles.recolorss}>*</label></label></b><br/>
      <Dropdown className={styles.onlyFont}
  placeholder="Select  Decision Status"
  options={this.state.DecisionStatusItems}
  styles={dropdownStyles}
  selectedKey={this.state.DecisionStatus ? this.state.DecisionStatus : undefined} onChange={this.hadleDecisionStatus.bind(this)} />
  <br></br>

      <b><label className={styles.labelsFonts}>28. Decision Notes <label className={styles.recolorss}>*</label></label></b><br/>
      <textarea name="txtDecisionNotes" value={this.state.DecisionNotes} onChange={this.changeDecisionNotes.bind(this)} className={styles.boxsize1}/><br></br> 



<b><label className={styles.labelsFonts}>29. Review Date <label className={styles.recolorss}>*</label></label></b><br/>

<div className={styles.welcome}>
<DatePicker id="dtReviewDate" placeholder="Select a date..."
                            onSelectDate={this._onSelectReviewDate}
                            value={this.state.dtReviewDate}
                            formatDate={this._onFormatDate}
                            isMonthPickerVisible={false}
                            className={styles.boxsize}
                            />

</div>

<br></br>

    
      
      <b><label className={styles.labelsFonts}>30. Reviewed By <label className={styles.recolorss}>*</label></label></b><br/>
      
      <div className={styles.boxsize}>

      <PeoplePicker 
                  context={this.props.context}
                  //titleText="User Name"
                  personSelectionLimit={1}
                  showtooltip={true}
                  required={true}
                  disabled={false}
                  onChange={this._getPeoplePickerItemsReviewdBy.bind(this)}
                  webAbsoluteUrl='https://capcoinc.sharepoint.com/sites/CapcoSoftwareCatalogue/'
                  showHiddenInUI={false}
                  principalTypes={[PrincipalType.User]}
                  defaultSelectedUsers={(this.state.ReviewedBy && this.state.ReviewedBy.length) ? [this.state.ReviewedBy] : []}
                  //ref={c => (this.ppl = c)} 
                  resolveDelay={1000} /> 


      </div><br></br>
      <b><label className={styles.labelsFonts}>31. Review Frequency <label className={styles.recolorss}>*</label></label></b><br/>

  <Dropdown className={styles.onlyFont}
  placeholder="Select  Review Frequency"
  options={this.state.ReviewFrequencyItems}
  styles={dropdownStyles}
  selectedKey={this.state.ReviewFrequency ? this.state.ReviewFrequency : undefined} onChange={this.hadleReviewFrequency.bind(this)} />

     <br></br>
<b><label className={styles.labelsFonts}>32. Next Review Date <label className={styles.recolorss}>*</label></label></b><br/>

<div className={styles.welcome}>
<DatePicker id="dtNextReviewDate" placeholder="Select a date..."
                            onSelectDate={this._onSelectNextReviewDate}
                            value={this.state.dtNextReviewDate}
                            formatDate={this._onFormatDate}
                            isMonthPickerVisible={false}
                            className={styles.boxsize}
                            />

</div>

<br></br>

<b><label className={styles.labelsFonts}>33. Approval End Date <label className={styles.recolorss}>*</label></label></b><br/>
<div className={styles.welcome}>
<DatePicker id="dtNextReviewDate" placeholder="Select a date..."
                            onSelectDate={this._onSelectApprovalEndDate}
                            value={this.state.dtApprovalEndDate}
                            formatDate={this._onFormatDate}
                            isMonthPickerVisible={false}
                            className={styles.boxsize}
                            />

</div>

<br></br>
      <b><label className={styles.labelsFonts}>34. EMP Policy <label className={styles.recolorss}>*</label></label></b><br/>

      <Dropdown className={styles.onlyFont}
  placeholder="Select  EMP Policy "
  options={this.state.EMPPolicyItems}
  styles={dropdownStyles}
  selectedKey={this.state.EMPPolicy ? this.state.EMPPolicy : undefined} onChange={this.hadleEMPPolicy.bind(this)} />
  <br></br>

      <b><label className={styles.labelsFonts}>35. EMP Workstyle <label className={styles.recolorss}>*</label></label></b><br/>

      <Dropdown className={styles.onlyFont}
  placeholder="Select EMP Workstyle "
  options={this.state.EMPWorkstyleItems}
  styles={dropdownStyles}
  selectedKey={this.state.EMPWorkstyle ? this.state.EMPWorkstyle : undefined} onChange={this.hadleEMPWorkstyle.bind(this)} />
  <br></br>

      <b><label className={styles.labelsFonts}>36. Risk Management Tracker Reference <label className={styles.recolorss}>*</label></label></b><br/>
      <input type="text" className={styles.boxsize} name="txtRiskMangment" value={this.state.RiskManagement} onChange={this.changesRiskManagement.bind(this)}/><br></br>

      <b><label className={styles.labelsFonts}>37. SNOW Reference <label className={styles.recolorss}>*</label></label></b><br/>
      <input type="text" className={styles.boxsize} name="txtsnowRefrence" value={this.state.SNOWReference} onChange={this.changeSNOWReference.bind(this)}/><br></br>

      <b><label className={styles.labelsFonts}>38. Jira Reference <label className={styles.recolorss}>*</label></label></b><br/>
      <input type="text" className={styles.boxsize} name="txtJiraRefernce" value={this.state.JiraReference} onChange={this.changeJiraRefrence.bind(this)}/><br></br>

      
      <b><label className={styles.labelsFonts}>39. Software Location <label className={styles.recolorss}>*</label></label></b><br/>
      <Dropdown className={styles.onlyFont}
  placeholder="Select Software Location "
  options={this.state.SoftwareLocationItems}
  styles={dropdownStyles}
  selectedKey={this.state.SoftwareLocation ? this.state.SoftwareLocation : undefined} onChange={this.hadleSoftwareLocation.bind(this)} />
  <br></br>

      <b><label className={styles.labelsFonts}>40. Comments <label className={styles.recolorss}>*</label></label></b><br/>
      <textarea name="txtComments" value={this.state.Comments} onChange={this.changeComments.bind(this)} className={styles.boxsize1}/><br></br>

      <b><label className={styles.labelsFonts}>41. Hidden <label className={styles.recolorss}>*</label></label></b><br/>
      <ChoiceGroup  id="Toggle"  name="ToggleOptions"  defaultSelectedKey={this.state.ToggleHidevalue} options={Radiotest}   onChange={this.ToggleHide.bind(this)}  selectedKey={this.state.ToggleHidevalue}/> 
      <br></br>
       
       <div id="divbutton" hidden={this.state.showupdatebutton}> 
      <PrimaryButton text="Submit" onClick={this.OnBtnClick.bind(this)} styles={stackButtonStyles} className={styles.Approvebutton}/><br></br>
      </div>

      <div id="divbutton" hidden={this.state.showSavebutton}> 
      <PrimaryButton text="Update" onClick={this.OnBtnUpdateClick.bind(this)} styles={stackButtonStyles} className={styles.Approvebutton}/><br></br>

     {/* <b><label className={styles.labelsFonts}>{this.state.TestValue}</label></b><br/>   */}
      </div>
     </Stack>
      </Stack>

            
        
      );
    }
  }
