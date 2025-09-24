import { sp } from "@pnp/sp/presets/all";
import "@pnp/sp/webs";
import "@pnp/sp/folders";
import "@pnp/sp/lists";
import "@pnp/sp/views";
import "@pnp/sp/items";
import "@pnp/sp/site-users/web";
import "@pnp/sp/fields";
import "@pnp/sp/attachments";
import "@pnp/sp/files";

export default class Service {

    public mysitecontext: any;

    public constructor(siteUrl: string, Sitecontext: any) {
        this.mysitecontext = Sitecontext;

        sp.setup({
            sp: {
                baseUrl: siteUrl

            },
        });

    }
    
 
    public async getUserByLogin(LoginName: string): Promise<any> {

        try {

            const user = await sp.web.siteUsers.getByLoginName(LoginName).get();

            return user;

        } catch (error) {

            console.log(error);

        }

    }


    //LookUps
    
    public async GetAllSoftwareRestrictions():Promise<any>
    {
 
     return await sp.web.lists.getByTitle("Software Restriction").items.select('Title','ID').expand().get().then(function (data:any) {
 
     return data;
 
 
     });
 
 
    }

    public async GetAllExplicitUsecase():Promise<any>
    {
 
     return await sp.web.lists.getByTitle("ExplicitUsecase").items.select('Title','ID').expand().get().then(function (data:any) {
 
     return data;
 
 
     });
 
 
    }

    public async GetAllSoftwareScope():Promise<any>
    {
 
     return await sp.web.lists.getByTitle("Software Scope").items.select('Title','ID').expand().get().then(function (data:any) {
 
     return data;
 
 
     });
 
 
    }


    public async GetAllSoftwareEdition():Promise<any>
    {
 
     return await sp.web.lists.getByTitle("Software Edition").items.select('Title','ID').expand().get().then(function (data:any) {
 
     return data;
 
 
     });
 
 
    }


    public async GetAllLicenseType():Promise<any>
    {
 
     return await sp.web.lists.getByTitle("License Type").items.select('Title','ID').expand().get().then(function (data:any) {
 
     return data;
 
 
     });
 
 
    }

    public async GetAllDataClassifications():Promise<any>
    {
 
     return await sp.web.lists.getByTitle("Data Classification").items.select('Title','ID').expand().get().then(function (data:any) {
 
     return data;
 
 
     });
 
 
    }

    public async GetAllRisks():Promise<any>
    {
 
     return await sp.web.lists.getByTitle("Risks").items.select('Title','ID').expand().get().then(function (data:any) {
 
     return data;
 
 
     });
 
 
    }


    public async GetAllDependency():Promise<any>
    {
 
     return await sp.web.lists.getByTitle("Dependency").items.select('Title','ID').expand().get().then(function (data:any) {
 
     return data;
 
 
     });
 
 
    }

    public async GetAllDiscoverSource():Promise<any>
    {
 
     return await sp.web.lists.getByTitle("Discovery Source").items.select('Title','ID').expand().get().then(function (data:any) {
 
     return data;
 
 
     });
 
 
    }

    public async GetAllBussinessOwner():Promise<any>
    {
 
     return await sp.web.lists.getByTitle("Business Owner").items.select('Title','ID').expand().get().then(function (data:any) {
 
     return data;
 
 
     });
 
 
    }

    //END

    //Choices

    public async GetAllAvaliblity():Promise<any>
    {
 
     return await sp.web.lists.getByTitle("Availability").items.select('Title','ID').expand().get().then(function (data:any) {
 
     return data;
 
 
     });
 
 
    }

    public async GetAllAuthorizationMethod():Promise<any>
    {
 
     return await sp.web.lists.getByTitle("Authorization Method").items.select('Title','ID').expand().get().then(function (data:any) {
 
     return data;
 
 
     });
 
 
    }

    public async GetAllAuthenticationMethod():Promise<any>
    {
 
     return await sp.web.lists.getByTitle("Authentication Method").items.select('Title','ID').expand().get().then(function (data:any) {
 
     return data;
 
 
     });
 
 
    }

    public async GetAllDecisionStatus():Promise<any>
    {
 
     return await sp.web.lists.getByTitle("Decision Status").items.select('Title','ID').expand().get().then(function (data:any) {
 
     return data;
 
 
     });
 
 
    }

    public async GetAllEMPWorkstyle():Promise<any>
    {
 
     return await sp.web.lists.getByTitle("EMP Workstyle").items.select('Title','ID').expand().get().then(function (data:any) {
 
     return data;
 
 
     });
 
 
    }
    public async GetAllEMPPolicy():Promise<any>
    {
 
     return await sp.web.lists.getByTitle("EMP Policy").items.select('Title','ID').expand().get().then(function (data:any) {
 
     return data;
 
 
     });
 
 
    }



    public async GetAllReviewFrequency():Promise<any>
    {
 
     return await sp.web.lists.getByTitle("Review Frequency").items.select('Title','ID').expand().get().then(function (data:any) {
 
     return data;
 
 
     });
 
 
    }

    public async GetAllSoftwareMissionCrticalRating():Promise<any>
    {
 
     return await sp.web.lists.getByTitle("Software Mission Critical Rating").items.select('Title','ID').expand().get().then(function (data:any) {
 
     return data;
 
 
     });
 
 
    }

    public async GetAllTypeofAiCapablities():Promise<any>
    {
 
     return await sp.web.lists.getByTitle("Type of AI capabilities").items.select('Title','ID').expand().get().then(function (data:any) {
 
     return data;
 
 
     });
 
 
    }

    public async GetAllCategory():Promise<any>
    {
 
     return await sp.web.lists.getByTitle("Category").items.select('Title','ID').expand().get().then(function (data:any) {
 
     return data;
 
 
     });
 
 
    }

    public async GetAllSoftwareLocation():Promise<any>
    {
 
     return await sp.web.lists.getByTitle("Software Location").items.select('Title','ID').expand().get().then(function (data:any) {
 
     return data;
 
 
     });
 
 
    }

    public async GetAllSystemORTechnicalOwner():Promise<any>
    {
 
     return await sp.web.lists.getByTitle("System/Technical Owner").items.select('Title','ID').expand().get().then(function (data:any) {
 
     return data;
 
 
     });
 
 
    }


    public async getUserByEmail(LoginName:string):Promise<any>{
        try{
            const user = await sp.web.siteUsers.getByEmail(LoginName).get();
            return user;
        }catch(error){
            console.log(error);
        }
    }

    public async getItemByID(ItemID: any): Promise<any> {
    try {

const selectedList = 'IT Software Catalogue';
const Item: any[] = await sp.web.lists.getByTitle(selectedList).items.select("*,Title,ReviewedBy/EMail,BusinessOwnerName/EMail,SystemorTechnicalOwnernames/EMail").expand("ReviewedBy,BusinessOwnerName,SystemorTechnicalOwnernames").filter("ID eq '" + ItemID + "'").get();
        return Item[0];
    } catch (error) {
        console.log(error);
    }
}


    public async Save (

        //1-11
        SoftwareTitle:string,
        Categoryval:string,
        MyCategoryKey:Number,
        Availabilityval:string,
        MyAvailabilityKey:Number,

        DescriptionVal:string,
        ExplicitUseCaseVal:string,
        MyExplicitUsecaseKey:Number,
        SoftwareRestrictionVal:string,
        MySoftwareRestrictionKey:Number,

      SoftwareRestrictionNotesVal:string,
      PublisherVal:String,
      SoftwareScopeVal:string,
      MySoftwareScopeKey:Number,
      SoftwareEditionVal:string,
      MySoftwareEditionkey:Number,
      LicenseReqVal:string,

        //12-20
        LicenseTypeVal:string,
        MyLicenseTypekey:Number,
        AnyAiTypeval:string,

        MyAiCapblities:string,
        MyTypeofAIcapabilitieskey:Number,

        MyDependecies:string,
        MyDependencykey:Number,

        MyDataClassification:string,
        MyDataClassificationKey:Number,

        MySoftwareMissioncrtical:string,
        MySoftwareMissionCriticalRatingkey:Number,

        MyRisks:String,
        MyRisksKey:Number,

        MyRiskNotes:string,
        MyAuthenticationMethod:string,
        MyAuthenticationMethodKey:Number,

        //21-30
        MyAuthorizationMethod:string,
        MyAuthorizationMethodkey:Number,

        MyDiscoverScource:string,
        MyDiscoverySourcekey:Number,

      MyDecisionStatus:string,
      MyDecisionStatuskey:Number,
   
      MyDecisionNotes:string,
      MyReviewDate:String,
        //30
       //31-40

      MyReviewFrequency:string,
      MyReviewFrequencyKey:Number,
      MyNextReviewDate:string,
      MyApprovalEndDate:string,

      MyEmpPolicy:string,
      MyEMPPolicyKey:Number,

      MyEmpWorkStyle:string,
      MyEMPWorkstyleKey:Number,

      MyRiskMangment:string,
      MySnowRefrence:String,
      MyJiraReference:String,

      MyStorageLocation:string,
      MySoftwareLocationKey:Number,


      MyComments:String,
      MyToggleHide:String,

      MyBusinessowner:string,
      MyBusinessOwnerKey:Number,

      MyBusinessownerName:string,
      MyReviewsBy:string,

   
      
      
      MySystemTchownerChoice:string,
      MySystemorTechnicalOwnerkey:Number,
      
      //PPL TECH OWNER


      MySystemOwner:[],
      MySystemorTechnicalOwnerNames:string,
      
      //  //Keys
      //  
      
      
      
     
       //END

       
       

      )  {

        let Myval='Completed';
    
        try
        {

        let VarMyArra={"results":MySystemOwner};

         let Varmyval= await sp.web.lists.getByTitle("IT Software Catalogue").items.add({
   

            //1-11
            Title: SoftwareTitle,
            Category:Categoryval,
            CategoryKey:MyCategoryKey,
            Availability:Availabilityval,
            AvailabilityKey:MyAvailabilityKey,
            field_4:DescriptionVal,
            ExplicitUsecase:ExplicitUseCaseVal,
            ExplicitUsecaseKey:MyExplicitUsecaseKey,
            SoftwareRestriction:SoftwareRestrictionVal,
            SoftwareRestrictionKey:MySoftwareRestrictionKey,
            field_7:SoftwareRestrictionNotesVal,
            field_8:PublisherVal,
            SoftwareScope:SoftwareScopeVal,
            SoftwareScopeKey:MySoftwareScopeKey,
            SoftwareEdition:SoftwareEditionVal,
            SoftwareEditionkey:MySoftwareEditionkey,
            field_11:LicenseReqVal,
            //END
            //12-20
            LicenseType:LicenseTypeVal,
            LicenseTypekey:MyLicenseTypekey,
            field_13:AnyAiTypeval,

            TypeofAIcapabilities:MyAiCapblities,
            TypeofAIcapabilitieskey:MyTypeofAIcapabilitieskey,

            Dependency:MyDependecies,
            Dependencykey:MyDependencykey,
           DataClassification:MyDataClassification,
          DataClassificationKey:MyDataClassificationKey,

          field_17:MySoftwareMissioncrtical,
          SoftwareMissionCriticalRatingkey:MySoftwareMissionCriticalRatingkey,
          
            Risks:MyRisks,
            RisksKey:MyRisksKey,
            field_19:MyRiskNotes,
            AuthenticationMethod:MyAuthenticationMethod,
            AuthenticationMethodKey:MyAuthenticationMethodKey,

            //END

            //21-30
            AuthorizationMethod:MyAuthorizationMethod,
            AuthorizationMethodkey:MyAuthorizationMethodkey,

            DiscoverySource:MyDiscoverScource,
            DiscoverySourceKey:MyDiscoverySourcekey,
            DecisionStatus:MyDecisionStatus,
            DecisionStatuskey:MyDecisionStatuskey,

            field_28:MyDecisionNotes,
            field_29:MyReviewDate,
             //30
            ReviewFrequency:MyReviewFrequency,
            ReviewFrequencyKey:MyReviewFrequencyKey,

            field_32:MyNextReviewDate,
            field_33:MyApprovalEndDate,

          EMPPolicy:MyEmpPolicy,
          EMPPolicyKey:MyEMPPolicyKey,


            EMPWorkstyle:MyEmpWorkStyle,
            EMPWorkstyleKey:MyEMPWorkstyleKey,

            field_36:MyRiskMangment,
            field_37:MySnowRefrence,
            field_38:MyJiraReference,

            SoftwareLocation:MyStorageLocation,
            SoftwareLocationKey:MySoftwareLocationKey,

            field_39:MyComments,
            Hidden:MyToggleHide,
            BusinessOwner:MyBusinessowner,
            BusinessOwnerKey:MyBusinessOwnerKey,

            //pps
            BusinessOwnerNameId:MyBusinessownerName,
            ReviewedById:MyReviewsBy,

            
           SystemORTechnicalOwner:MySystemTchownerChoice,
           SystemorTechnicalOwnerkey:MySystemorTechnicalOwnerkey,
          //END


          //PPL
          SystemorTechnicalOwnernamesId:VarMyArra,
          SystemorTechnicalOwnernamess:MySystemorTechnicalOwnerNames,
         
            //END

            //KEYS
            
            
            
        }).then (async r => {
          // this will add an attachment to the item we just created to push t sharepoint list
    
          return Myval;
    
    
        })
    
    
        return Varmyval;
    
        
      }
    
    
    
      catch (error) {
        console.log(error);
      }
    
    
      
     }

    

     public async Update (

        //1-11
        MyRecordId:number,
        SoftwareTitle:string,
        Categoryval:string,
        MyCategoryKey:Number,
        Availabilityval:string,
        MyAvailabilityKey:Number,

        DescriptionVal:string,
        ExplicitUseCaseVal:string,
        MyExplicitUsecaseKey:Number,
        SoftwareRestrictionVal:string,
        MySoftwareRestrictionKey:Number,

      SoftwareRestrictionNotesVal:string,
      PublisherVal:String,
      SoftwareScopeVal:string,
      MySoftwareScopeKey:Number,
      SoftwareEditionVal:string,
      MySoftwareEditionkey:Number,
      LicenseReqVal:string,

        //12-20
        LicenseTypeVal:string,
        MyLicenseTypekey:Number,
        AnyAiTypeval:string,

        MyAiCapblities:string,
        MyTypeofAIcapabilitieskey:Number,

        MyDependecies:string,
        MyDependencykey:Number,

        MyDataClassification:string,
        MyDataClassificationKey:Number,

        MySoftwareMissioncrtical:string,
        MySoftwareMissionCriticalRatingkey:Number,

        MyRisks:String,
        MyRisksKey:Number,

        MyRiskNotes:string,
        MyAuthenticationMethod:string,
        MyAuthenticationMethodKey:Number,

        //21-30
        MyAuthorizationMethod:string,
        MyAuthorizationMethodkey:Number,

        MyDiscoverScource:string,
        MyDiscoverySourcekey:Number,

      MyDecisionStatus:string,
      MyDecisionStatuskey:Number,
   
      MyDecisionNotes:string,
      MyReviewDate:String,
        //30
       //31-40

      MyReviewFrequency:string,
      MyReviewFrequencyKey:Number,
      MyNextReviewDate:string,
      MyApprovalEndDate:string,

      MyEmpPolicy:string,
      MyEMPPolicyKey:Number,

      MyEmpWorkStyle:string,
      MyEMPWorkstyleKey:Number,

      MyRiskMangment:string,
      MySnowRefrence:String,
      MyJiraReference:String,

      MyStorageLocation:string,
      MySoftwareLocationKey:Number,


      MyComments:String,
      MyToggleHide:String,

      MyBusinessowner:string,
      MyBusinessOwnerKey:Number,

      MyBusinessownerName:string,
      MyReviewsBy:string,

      
      MySystemTchownerChoice:string,
      MySystemorTechnicalOwnerkey:Number,
      
      //PPL TECH OWNER
//LAST
//Problem
      MySystemOwner:[],
      MySystemorTechnicalOwnerNames:string,
      
      //  //Keys
      //  
      
       
       

      )  {

        let Myval='Completed';
    
        try
        {

        let VarMyArra={"results":MySystemOwner};

        let MyListTitle='IT Software Catalogue';

         let list = sp.web.lists.getByTitle(MyListTitle);
         let Varmyval = await list.items.getById(MyRecordId).update({
   

            //1-11
            Title: SoftwareTitle,
            Category:Categoryval,
            Availability:Availabilityval,
            field_4:DescriptionVal,
            ExplicitUsecase:ExplicitUseCaseVal,
            SoftwareRestriction:SoftwareRestrictionVal,
            field_7:SoftwareRestrictionNotesVal,
            field_8:PublisherVal,
            SoftwareScope:SoftwareScopeVal,
            SoftwareEdition:SoftwareEditionVal,
            field_11:LicenseReqVal,
            //END
            //12-20
            LicenseType:LicenseTypeVal,
            field_13:AnyAiTypeval,
            TypeofAIcapabilities:MyAiCapblities,
            Dependency:MyDependecies,
            DataClassification:MyDataClassification,
            field_17:MySoftwareMissioncrtical,
            Risks:MyRisks,
            field_19:MyRiskNotes,
            AuthenticationMethod:MyAuthenticationMethod,
            //END

            //21-30
            AuthorizationMethod:MyAuthorizationMethod,
            DiscoverySource:MyDiscoverScource,
            DecisionStatus:MyDecisionStatus,
             field_28:MyDecisionNotes,
             field_29:MyReviewDate,
             //30
             ReviewFrequency:MyReviewFrequency,
             field_32:MyNextReviewDate,
             field_33:MyApprovalEndDate,
             EMPPolicy:MyEmpPolicy,
             EMPWorkstyle:MyEmpWorkStyle,
             field_36:MyRiskMangment,
             field_37:MySnowRefrence,
             field_38:MyJiraReference,
             SoftwareLocation:MyStorageLocation,
             field_39:MyComments,
             Hidden:MyToggleHide,
            BusinessOwner:MyBusinessowner,
            //pps
            BusinessOwnerNameId:MyBusinessownerName,
            
            ReviewedById:MyReviewsBy,

//Last

SystemorTechnicalOwnernamesId:VarMyArra,
SystemorTechnicalOwnernamess:MySystemorTechnicalOwnerNames,


            //END

            //KEYS
          CategoryKey:MyCategoryKey,
          AvailabilityKey:MyAvailabilityKey,
          ExplicitUsecaseKey:MyExplicitUsecaseKey,
          SoftwareRestrictionKey:MySoftwareRestrictionKey,
          SoftwareScopeKey:MySoftwareScopeKey,
          SoftwareEditionkey:MySoftwareEditionkey,
          LicenseTypekey:MyLicenseTypekey,
          TypeofAIcapabilitieskey:MyTypeofAIcapabilitieskey,
          Dependencykey:MyDependencykey,
          DataClassificationKey:MyDataClassificationKey,
          SoftwareMissionCriticalRatingkey:MySoftwareMissionCriticalRatingkey,
          RisksKey:MyRisksKey,
          AuthenticationMethodKey:MyAuthenticationMethodKey,
          AuthorizationMethodkey:MyAuthorizationMethodkey,
          DiscoverySourceKey:MyDiscoverySourcekey,
          BusinessOwnerKey:MyBusinessOwnerKey,
          SystemorTechnicalOwnerkey:MySystemorTechnicalOwnerkey,
          DecisionStatuskey:MyDecisionStatuskey,
          ReviewFrequencyKey:MyReviewFrequencyKey,
          EMPPolicyKey:MyEMPPolicyKey,
          EMPWorkstyleKey:MyEMPWorkstyleKey,
          SoftwareLocationKey:MySoftwareLocationKey,
          SystemORTechnicalOwner:MySystemTchownerChoice,

              

        
            //END
            
            
            


            
        }).then (async r => {
          // this will add an attachment to the item we just created to push t sharepoint list
    
          return Myval;
    
    
        })
    
    
        return Varmyval;
    
        
      }
    
    
    
      catch (error) {
        console.log(error);
      }
    
    
      
     }



    //END



















}
