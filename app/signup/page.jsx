const  CreateAcount =() =>{
    return(
        <form >
  <div className="space-y-12">
    

    <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base/7 font-semibold text-gray-900">Personal Information</h2>
      <p className="mt-1 text-sm/6 text-gray-600">Use a permanent address where you can receive mail.</p>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">First name</label>       <div className="mt-2">
            <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">Last name</label>       <div className="mt-2">
            <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email address</label> 
          <div className="mt-2">
            <input id="email" name="email" type="email" autoComplete="email" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Password</label> 
          <div className="mt-2">
            <input id="password" name="password" type="password" autoComplete="password" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900"> enter your Country</label>       <div className="mt-2 grid grid-cols-1">
            <select name="country" className="p-2 border rounded-md w-full">
  <option value="">Select your country</option>
  <option value="AF">Afghanistan</option>
  <option value="AL">Albania</option>
  <option value="DZ">Algeria</option>
  <option value="AD">Andorra</option>
  <option value="AO">Angola</option>
  <option value="AR">Argentina</option>
  <option value="AM">Armenia</option>
  <option value="AU">Australia</option>
  <option value="AT">Austria</option>
  <option value="AZ">Azerbaijan</option>
  <option value="BH">Bahrain</option>
  <option value="BD">Bangladesh</option>
  <option value="BE">Belgium</option>
  <option value="BJ">Benin</option>
  <option value="BT">Bhutan</option>
  <option value="BO">Bolivia</option>
  <option value="BW">Botswana</option>
  <option value="BR">Brazil</option>
  <option value="BG">Bulgaria</option>
  <option value="BF">Burkina Faso</option>
  <option value="BI">Burundi</option>
  <option value="KH">Cambodia</option>
  <option value="CM">Cameroon</option>
  <option value="CA">Canada</option>
  <option value="CF">Central African Republic</option>
  <option value="TD">Chad</option>
  <option value="CL">Chile</option>
  <option value="CN">China</option>
  <option value="CO">Colombia</option>
  <option value="CD">Congo (DRC)</option>
  <option value="CG">Congo (Republic)</option>
  <option value="CR">Costa Rica</option>
  <option value="HR">Croatia</option>
  <option value="CY">Cyprus</option>
  <option value="CZ">Czech Republic</option>
  <option value="DK">Denmark</option>
  <option value="DJ">Djibouti</option>
  <option value="DO">Dominican Republic</option>
  <option value="EC">Ecuador</option>
  <option value="EG">Egypt</option>
  <option value="SV">El Salvador</option>
  <option value="EE">Estonia</option>
  <option value="ET">Ethiopia</option>
  <option value="FI">Finland</option>
  <option value="FR">France</option>
  <option value="GA">Gabon</option>
  <option value="GM">Gambia</option>
  <option value="GE">Georgia</option>
  <option value="DE">Germany</option>
  <option value="GH">Ghana</option>
  <option value="GR">Greece</option>
  <option value="GT">Guatemala</option>
  <option value="GN">Guinea</option>
  <option value="GY">Guyana</option>
  <option value="HT">Haiti</option>
  <option value="HN">Honduras</option>
  <option value="HK">Hong Kong</option>
  <option value="HU">Hungary</option>
  <option value="IS">Iceland</option>
  <option value="IN">India</option>
  <option value="ID">Indonesia</option>
  <option value="IR">Iran</option>
  <option value="IQ">Iraq</option>
  <option value="IE">Ireland</option>
  <option value="IL">Israel</option>
  <option value="IT">Italy</option>
  <option value="CI">Ivory Coast</option>
  <option value="JM">Jamaica</option>
  <option value="JP">Japan</option>
  <option value="JO">Jordan</option>
  <option value="KZ">Kazakhstan</option>
  <option value="KE">Kenya</option>
  <option value="KW">Kuwait</option>
  <option value="KG">Kyrgyzstan</option>
  <option value="LA">Laos</option>
  <option value="LV">Latvia</option>
  <option value="LB">Lebanon</option>
  <option value="LS">Lesotho</option>
  <option value="LR">Liberia</option>
  <option value="LY">Libya</option>
  <option value="LT">Lithuania</option>
  <option value="LU">Luxembourg</option>
  <option value="MG">Madagascar</option>
  <option value="MW">Malawi</option>
  <option value="MY">Malaysia</option>
  <option value="MV">Maldives</option>
  <option value="ML">Mali</option>
  <option value="MT">Malta</option>
  <option value="MR">Mauritania</option>
  <option value="MU">Mauritius</option>
  <option value="MX">Mexico</option>
  <option value="MD">Moldova</option>
  <option value="MN">Mongolia</option>
  <option value="ME">Montenegro</option>
  <option value="MA">Morocco</option>
  <option value="MZ">Mozambique</option>
  <option value="MM">Myanmar (Burma)</option>
  <option value="NA">Namibia</option>
  <option value="NP">Nepal</option>
  <option value="NL">Netherlands</option>
  <option value="NZ">New Zealand</option>
  <option value="NI">Nicaragua</option>
  <option value="NE">Niger</option>
  <option value="NG">Nigeria</option>
  <option value="KP">North Korea</option>
  <option value="NO">Norway</option>
  <option value="OM">Oman</option>
  <option value="PK">Pakistan</option>
  <option value="PA">Panama</option>
  <option value="PG">Papua New Guinea</option>
  <option value="PY">Paraguay</option>
  <option value="PE">Peru</option>
  <option value="PH">Philippines</option>
  <option value="PL">Poland</option>
  <option value="PT">Portugal</option>
  <option value="QA">Qatar</option>
  <option value="RO">Romania</option>
  <option value="RU">Russia</option>
  <option value="RW">Rwanda</option>
  <option value="SA">Saudi Arabia</option>
  <option value="SN">Senegal</option>
  <option value="RS">Serbia</option>
  <option value="SG">Singapore</option>
  <option value="SK">Slovakia</option>
  <option value="SI">Slovenia</option>
  <option value="SO">Somalia</option>
  <option value="ZA">South Africa</option>
  <option value="KR">South Korea</option>
  <option value="ES">Spain</option>
  <option value="LK">Sri Lanka</option>
  <option value="SD">Sudan</option>
  <option value="SE">Sweden</option>
  <option value="CH">Switzerland</option>
  <option value="SY">Syria</option>
  <option value="TW">Taiwan</option>
  <option value="TJ">Tajikistan</option>
  <option value="TZ">Tanzania</option>
  <option value="TH">Thailand</option>
  <option value="TG">Togo</option>
  <option value="TN">Tunisia</option>
  <option value="TR">Turkey</option>
  <option value="UG">Uganda</option>
  <option value="UA">Ukraine</option>
  <option value="AE">United Arab Emirates</option>
  <option value="GB">United Kingdom</option>
  <option value="US">United States</option>
  <option value="UY">Uruguay</option>
  <option value="UZ">Uzbekistan</option>
  <option value="VE">Venezuela</option>
  <option value="VN">Vietnam</option>
  <option value="YE">Yemen</option>
  <option value="ZM">Zambia</option>
  <option value="ZW">Zimbabwe</option>
</select>

            
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
    <  a href="/shop" className="text-sm/6 font-semibold text-gray-900 bg-red-700 w-30 border-2 rounded p-1 hover:bg-red-400">Cancel</a>
    <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500  capitalize focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-30">submit</button>
  </div>
      </div>
      
    </div>
  <p className="text-center text-blue-500">'Or use google account' <a href="http://google.com" target="_blank" className="text-green-900 underline"> SignIn with Google</a></p>

   
  </div>

  
</form>

    )
}

export default CreateAcount