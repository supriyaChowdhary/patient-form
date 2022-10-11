import { PatientRegistration, San, Uhid,Save,Reset,Search, Inputlabel,Patient, InputField,PatientSearch,PrintPatient, Div,RemarkInput,DivImage, AgeInput,Comunication, RelationInputField,DobInput,IdentityInput,EmailInput,AddressInput,CityInput,StateInput,CountryInput,PinInput,ContactInput,Reference,AddressReferralInput,MobileInput,AddReferalInput,PayerInformation,PolicyInput,CreditInput, OpdCreditInput,ValidToInput,ValidFromInput,CoPayInput,ApprovalReqInput,IPDInput,TopupInput,CoPayPercentInput,CardNoInput,CoPayMaxInput,Pharmacyinput } from '../styles/patientRegistrationFormStyle.js';
import '../App.css';
import styled from "styled-components";
import profile from "../images/profile.png"
import search  from "../images/search.jpg"

const NationalitySelect = styled.select`
    margin-left: 103px;
    height: 24px;
    width: 148px;
    margin-right:5px;
    `; 
const SelectStyle = styled.select`
        width: 147px;
        height: 24px;
        margin-left: 84px;
       
`; 
const GenderSelect  = styled.select`
    width: 147px;
    height: 24px;
    margin-left: 119px;
`; 
const RelationSelect = styled.select`
  width: 98px;
    height: 24px;
    margin-left: 10px;
`; 
const OccupationSelect = styled.select`
margin-left: 42px;
width: 155px;
`; 
const IdentitySelect = styled.select`
margin-left: 87px;
    width: 110px;
    margin-right: 5px;
`; 
const AgeSelect = styled.select`
margin-left: 89px;
height: 24px;
width: 80px;
margin-right: 5px;
`; 
const BloodGroupSelect = styled.select`
width: 149px;
margin-left: 89px;
margin-right:5px;
`; 
const PayerInput = styled.select`
width: 156px;
    margin-left: 4px;
    height: 24px;;
`;
const SponcerInput = styled.select`
width: 159px;
margin-left: 130px;
`;
const SubCompanyInput = styled.select`
width: 225px;
margin-left: 68px;
`;
const NetworkInput = styled.select`
width: 155px;
margin-left: 55px;
`;
const CoverageInput = styled.select`
width: 155px;
margin-left: 123px;
`; 
const ProfileImg  = styled.img`
      width:100px;
`; 
const SearchImg = styled.img `
width: 15px;
    margin: 5px;
    height: 15px;
    padding-top: 7px;
`;
const SearchImage = styled.img `
width: 15px;
    margin: 5px;
    height: 15px;
    
`;
function patientRegistrationForm() {
    return (
        <div>
            <div style={{width:'1100px'}}>
                
                    <PatientRegistration>
                        <Patient>Patient Registration</Patient>
                    <PrintPatient><SearchImg src={search} /><PatientSearch>Print Patient Info</PatientSearch> </PrintPatient>
                    <Save>Save</Save>
                    <Reset>Reset</Reset>
                    <Search><SearchImage src={search} />Search</Search> 
                    </PatientRegistration>
                <Div>
                    <Inputlabel>UHID</Inputlabel>
                    <San value="San-"></San>
                    <Uhid value="UHID"></Uhid>
                    <SearchImage src={search} />
                    <Inputlabel>Patient Name<span style={{color:'red'}}>*</span></Inputlabel>
                    <InputField value="Ram"></InputField>

                </Div>
                <DivImage> <ProfileImg src={profile} alt= "profile" /></DivImage>
                <Div>
                    <RelationSelect>
                        <option value="Father">Father</option>
                        <option value="Mother">Mother</option>
                        <option value="Sister">Sister</option>
                    </RelationSelect>
                    <RelationInputField></RelationInputField>

                    <Inputlabel>Gender<span style={{color:'red'}}>*</span></Inputlabel>
                    <GenderSelect>
                        <option value="Select">Select</option>
                        <option value="male">male</option>
                        <option value="Female">Female</option>

                    </GenderSelect>
                </Div>
                <Div>
                    <Inputlabel>Occupation</Inputlabel>
                        <OccupationSelect>
                            <option value="Select">Select</option>
                            <option value="Farmer">Farmer</option>
                            <option value="SoftWare">SoftWare</option>
                        </OccupationSelect>
                    <Inputlabel>Marital Status</Inputlabel>
                        <SelectStyle>
                            <option value="Unmarried">Unmarried</option>
                            <option value="Married">Married</option>
                        </SelectStyle>
                </Div>
                <Div>
                    <Inputlabel>DOB</Inputlabel>
                        <DobInput type="date" name="DOB"></DobInput>
                    <Inputlabel>Nationality</Inputlabel>
                         <NationalitySelect>
                         <option value="Select">Select</option>
                            <option value="IN">India</option>
                            <option value="US">United States</option>
                         </NationalitySelect>
                    <Inputlabel>Identity No</Inputlabel>
                        <IdentitySelect>
                            <option value="Select">Select</option>
                        </IdentitySelect>
                        <IdentityInput></IdentityInput>
                </Div>
                <Div>
                    <Inputlabel>Age</Inputlabel>
                        <AgeSelect>
                            <option value="Years">Yeras</option>
                            <option value="Months">Months</option>
                        </AgeSelect>
                        <AgeInput value="Age"></AgeInput>
                    <Inputlabel>Blood Group</Inputlabel>
                        <BloodGroupSelect>
                            <option value="Select">Select</option>
                            <option value="O+">O+</option>
                            <option value="A+">A+</option>
                        </BloodGroupSelect>
                    <Inputlabel>Email ID</Inputlabel>
                        <EmailInput value="Email ID"></EmailInput>
                </Div>
                <Comunication>Communication Details</Comunication>
                <Div>
                    <Inputlabel>Address<span style={{color:'red'}}>*</span></Inputlabel>
                        <AddressInput value="Address"></AddressInput>
                    <Inputlabel>City<span style={{color:'red'}}>*</span></Inputlabel>
                    <CityInput></CityInput>
                    <Inputlabel>State</Inputlabel>
                        <StateInput></StateInput>
                </Div> 
                <Div>
                    <Inputlabel>Country</Inputlabel>
                        <CountryInput></CountryInput>
                    <Inputlabel>Pin Code</Inputlabel>
                    <PinInput value="Pin Code"></PinInput>
                    <Inputlabel>Contact No<span style={{color:'red'}}>*</span></Inputlabel>
                        <ContactInput value="Contact No"></ContactInput>
                </Div>
                <Reference>Reference Detail</Reference> 
                <Div>
                    <Inputlabel>Referral Name</Inputlabel>
                        <AddressReferralInput value="Referral Name"></AddressReferralInput>
                    <Inputlabel>Mobile no</Inputlabel>
                    <MobileInput></MobileInput>
                    <Inputlabel>Add Referal</Inputlabel>
                        <AddReferalInput></AddReferalInput>
                </Div> 
              <PayerInformation>Payer Information</PayerInformation>
                <Div>
                    <Inputlabel>Payer/Comapny<span style={{color:'red'}}>*</span></Inputlabel>
                        <PayerInput>
                        <option value="Cash">Cash</option>
                        </PayerInput>
                    <Inputlabel>Sponcer</Inputlabel>
                    <SponcerInput>
                    <option value="Cash">Cash</option>
                    </SponcerInput>
                    <Inputlabel>SubCompany<span style={{color:'red'}}>*</span></Inputlabel>
                        <SubCompanyInput>
                        <option value="Select">Select</option>
                        </SubCompanyInput>
                </Div> 
               <Div>
                    <Inputlabel>Network</Inputlabel>
                        <NetworkInput>
                        <option value="Select">Select</option>
                        </NetworkInput>
                    <Inputlabel>Policy no</Inputlabel>
                    <PolicyInput value="Policy No"></PolicyInput>
                    <Inputlabel>Credit limit</Inputlabel>
                        <CreditInput value="Credit Limit"></CreditInput>
                </Div> 
                <Div>
                    <Inputlabel>ValidFrom<span style={{color:'red'}}>*</span></Inputlabel>
                        <ValidFromInput value="Valid From"></ValidFromInput>
                    <Inputlabel>Validupto<span style={{color:'red'}}>*</span></Inputlabel>
                    <ValidToInput></ValidToInput>
                    <Inputlabel>OPD Credit Limit<span style={{color:'red'}}>*</span></Inputlabel>
                        <OpdCreditInput></OpdCreditInput>
                </Div> 
                <Div>
                    <Inputlabel>Co-pay MaxLimit</Inputlabel>
                        <CoPayInput value="Co-pay Max limit"></CoPayInput>
                    <Inputlabel>Approval Required</Inputlabel>
                    <ApprovalReqInput></ApprovalReqInput>
                    <Inputlabel>IPD Co-pay%</Inputlabel>
                        <IPDInput value="IPD phaarmacy Co-pay percent"></IPDInput>
                </Div> 
                <Div>
                    <Inputlabel>Top-up Card<span style={{color:'red'}}>*</span></Inputlabel> 
                        <TopupInput value="Top up card"></TopupInput>
                    <Inputlabel>co-pay percent<span style={{color:'red'}}>*</span><span style={{color:'red'}}>*</span></Inputlabel>
                    <CoPayPercentInput value="co-pay percent"></CoPayPercentInput>
                    <Inputlabel>Card No<span style={{color:'red'}}>*</span><span style={{color:'red'}}>*</span></Inputlabel>
                        <CardNoInput value="card no"></CardNoInput>
                </Div> 
                <Div>
                    <Inputlabel>Co-pay MaxLimit</Inputlabel>
                        <CoPayMaxInput value="Max Limit"></CoPayMaxInput>
                    <Inputlabel>Coverage</Inputlabel>
                    <CoverageInput>
                    <option value="Ipo">Ipo</option>
                    </CoverageInput>
                    <Inputlabel>Pharmacy limit</Inputlabel>
                        <Pharmacyinput value="Pharmacy limit"></Pharmacyinput>
                </Div> 
                <Div>
                    <Inputlabel>Remark</Inputlabel>
                        <RemarkInput></RemarkInput>
                </Div> 
            </div>

        </div>
    );

}
export default patientRegistrationForm;