import { motion } from "framer-motion";

import { styles } from "../styles";


const Home = () => {{
    const gradientStyle = {
        borderImage: 'linear-gradient(to bottom,#c026d3, #38B2AC)',
        borderImageSlice: 4,
        
        borderLeftWidth: '10px', 
        borderRadius:'15px',
        borderBottomLeftRadius: '10px',
        borderTopLeftRadius: '10px',
        
        
      };
  return (
    <section class="bg-white  dark:bg-gray-200  p-6">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div class="flex">
  <div class="flex-growp-4 font-semibold text-l text-gray-800  ">Already have a phone?Choose your Power Plan:</div>
  <div class="flex-grow text-gray-400 font-semibold text-center ">Show plans with :</div>
  <div class="flex-grow">
    <div class="flex items-center mb-4">
        <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-white bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900">Default radio</label>
    </div>
    <div class="flex items-center">
        <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-white bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-800">Checked state</label>
    </div>
</div>

  <div class="flex-grow  ">
    
  <div class="flex items-center mb-4">
    <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-800">Default radio</label>
</div>
<div class="flex items-center">
    <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-radio-2" class="ms-2 text-sm font-medium  text-gray-800">Checked state</label>
</div>
    
      </div>
</div>

        
        <div class="space-y-8 lg:grid sm:gap-6 xl:gap-10 lg:space-y-0">
        <div class="overflow-x-auto p-4 ">
  <div class="flex space-x-4 ">
            {/* <!-- Pricing Card --> */}
            <div class="flex-shrink-0 ">
          
                                <div class="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-gray-200  text-gray-100 "></div>
            <div className="flex flex-col p-4 mx-auto max-w-lg text-gray-900 bg-white rounded- shadow xl:p-8 dark:bg-gray-100 " style={gradientStyle}>
    

  
                
            <h5 class="mb text-1xl font-semibold text-fuchsia-700">You Pay</h5>
            <div class="flex  items-baseline ">
                    <span class=" text-2xl font-extrabold text-fuchsia-700">AED 125</span>
                    <span class=" text-fuchsia-700">/month</span>
                </div>
                <h5 class="  font-semibold text-gray-900">For 12 months + 5% VAT</h5>
                <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-300"/>
                <h5 class="mb text-1xl font-semibold text-sky-500">You Get</h5>
                <h5 class="mb text-2xl font-semibold text-sky-500">Power Plan 125</h5>
                <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-300"/>
                <div class="flex items-baseline space-x-5">
                    <span class=" text-2xl font-extrabold text-gray-900">4 GB</span>
                    <span class=" text-gray-900">National data</span>
                </div>
                <div class="flex mt-2 items-baseline space-x-4">
                    <span class=" text-2xl font-extrabold text-gray-900">100</span>
                    <span class=" text-gray-900">Flexi minutes</span>
                </div>
                <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-300"/>
                
                
                {/* <!-- List --> */}
                <ul role="list" class="mb-1 space-y-2 text-left">
                    <li class="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg class="flex-shrink-0 w-5 h-5 text-gray-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span class='text-xs'>No activation fee .Save AED 125</span>
                    </li>
                    <li class="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg class="flex-shrink-0 w-5 h-5 text-gray-900  " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span class='text-xs'>4 GB Free data on Wifi UAE</span>
                    </li>
                    <li class="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg class="flex-shrink-0 w-5 h-5 text-gray-900  " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                <span class='text-xs' >Carry over data to next month</span>
            </li>
            <li class="flex items-center space-x-3">

<span class='text-xs'> </span>
</li>
<li class="flex items-center space-x-3">

<span class='text-xs'> </span>
</li>
                    
                </ul>
                <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-300"/>
                <h3 class="w-3/4 h-9 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center p-2 text-s text-gray-100 ">
  Limited Time offer
</h3>
<h4 class="text-s mt-2">The Entertainer on us for 12 months</h4>
                <hr class="h-px my-10 bg-gray-200 border-0 dark:bg-gray-300"/>
           
                <div class="flex items-center">
                <a href="#" class="text-xs text-gray-900 underline">What you get</a>

    <a href="#" class=" flex-1 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-8 py-3 text-center text-fuchsia-700 dark:focus:ring-primary-900 border border-neutral-300 ml-4">Select</a>
</div>

                

            </div>
            </div>
            {/* <!-- Pricing Card --> */}
            <div class="flex-shrink-0">
          
                                <div class="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-violet-900 text-white rounded shadow-sm shadow-slate-950/5">Most Popular</div>
                           
            <div className="flex flex-col p-6 mx-auto max-w-lg text-gray-900 bg-white rounded- shadow xl:p-8 dark:bg-gray-100 " style={gradientStyle}>
           

  
                
    <h5 class="mb text-1xl font-semibold text-fuchsia-700">You Pay</h5>
    <div class="flex  items-baseline ">
            <span class=" text-2xl font-extrabold text-fuchsia-700">AED 200</span>
            <span class=" text-fuchsia-700">/month</span>
        </div>
        <h5 class="  font-semibold text-gray-900">For 12 months + 5% VAT</h5>
        <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-300"/>
        <h5 class="mb text-1xl font-semibold text-sky-500">You Get</h5>
        <h5 class="mb text-2xl font-semibold text-sky-500">Power Plan 200</h5>
        <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-300"/>
        <div class="flex items-baseline space-x-2">
        <span class="line-through text-xl font-extrabold text-gray-300">13</span>
        <span class=" text-xl font-extrabold text-gray-900">26 GB</span>
           
            <span class=" text-gray-900">National data</span>
        </div>
        <div class="flex mt-2 items-baseline space-x-4">
            <span class=" text-2xl font-extrabold text-gray-900">400</span>
            <span class=" text-gray-900">Flexi minutes</span>
        </div>
        <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-300"/>
        
        
        {/* <!-- List --> */}
        <ul role="list" class="mb-1 space-y-2 text-left">
            <li class="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg class="flex-shrink-0 w-5 h-5 text-gray-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                <span class='text-xs'>No activation fee .Save AED 125</span>
            </li>
            <li class="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg class="flex-shrink-0 w-5 h-5 text-gray-900  " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                <span class='text-xs'>4 GB Free data on Wifi UAE</span>
            </li>
            <li class="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg class="flex-shrink-0 w-5 h-5 text-gray-900  " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                <span class='text-xs'>Carry over data to next month</span>
            </li>
            <li class="flex items-center space-x-3">

<span class='text-xs'> </span>
</li>
<li class="flex items-center space-x-3">

<span class='text-xs'> </span>
</li>
           
            
        </ul>
        <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-300"/>
        <h3 class="w-3/4 h-9 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center p-2 text-s text-gray-100 ">
  Limited Time offer
</h3>
<h4 class="text-s mt-2">The Entertainer on us for 12 months</h4>

        <hr class="h-px my-10 bg-gray-200 border-0 dark:bg-gray-300"/>
   
        <div class="flex items-center">
        <a href="#" class="text-xs text-gray-900 underline">What you get</a>

<a href="#" class="flex-1  bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-8 py-3 text-center text-fuchsia-700 dark:focus:ring-primary-900 border border-neutral-300 ml-4">Select</a>
</div>

        

    </div>
    </div>
    <div class="flex-shrink-0">
          
                                <div class="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-gray-200  text-gray-100 "></div>
                           
            <div className="flex flex-col p-6 mx-auto max-w-lg text-gray-900 bg-white rounded- shadow xl:p-8 dark:bg-gray-100 " style={gradientStyle}>
           

  
                
    <h5 class="mb text-1xl font-semibold text-fuchsia-700">You Pay</h5>
    <div class="flex  items-baseline ">
            <span class=" text-2xl font-extrabold text-fuchsia-700">AED 300</span>
            <span class=" text-fuchsia-700">/month</span>
        </div>
        <h5 class="  font-semibold text-gray-900">For 12 months + 5% VAT</h5>
        <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-300"/>
        <h5 class="mb text-1xl font-semibold text-sky-500">You Get</h5>
        <h5 class="mb text-2xl font-semibold text-sky-500">Power Plan 300</h5>
        <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-300"/>
        <div class="flex items-baseline space-x-2">
        <span class="line-through text-xl font-extrabold text-gray-300">25</span>
        <span class=" text-xl font-extrabold text-gray-900">50 GB</span>
           
            <span class=" text-gray-900">National data</span>
        </div>
        <div class="flex mt-2 items-baseline space-x-4">
            <span class=" text-2xl font-extrabold text-gray-900">1020</span>
            <span class=" text-gray-900">Flexi minutes</span>
        </div>
        <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-300"/>
        
        
        {/* <!-- List --> */}
        <ul role="list" class="mb-1 space-y-2 text-left">
            <li class="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg class="flex-shrink-0 w-5 h-5 text-gray-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                <span class='text-xs'>No activation fee .Save AED 125</span>
            </li>
            <li class="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg class="flex-shrink-0 w-5 h-5 text-gray-900  " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                <span class='text-xs'>4 GB Free data on Wifi UAE</span>
            </li>
            <li class="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg class="flex-shrink-0 w-5 h-5 text-gray-900  " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                <span class='text-xs'>Carry over data to next month</span>
            </li>
            <li class="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg class="flex-shrink-0 w-5 h-5 text-gray-900  " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                <span class='text-xs'>Amazon Prime on us </span>
            </li>
           
           
            
        </ul>
        <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-300"/>
        <h3 class="w-3/4 h-9 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center p-2 text-s text-gray-100">
  Limited Time offer
</h3>
<h4 class="text-s mt-2">The Entertainer on us for 12 months</h4>

        <hr class="h-px my-10 bg-gray-200 border-0 dark:bg-gray-300"/>
   
        <div class="flex items-center">
        <a href="#" class="text-xs text-gray-900 underline">What you get</a>

<a href="#" class=" flex-1  bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-8 py-3 text-center text-fuchsia-700 dark:focus:ring-primary-900 border border-neutral-300 ml-4">Select</a>
</div>

        

    </div>
    </div>
            {/* <!-- Pricing Card --> */}
            <div class="flex-shrink-0">
          
          <div class="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-gray-200  text-gray-100 "></div>
     
<div className="flex flex-col p-6 mx-auto max-w-lg text-gray-900 bg-white rounded- shadow xl:p-8 dark:bg-gray-100 " style={gradientStyle}>




<h5 class="mb text-1xl font-semibold text-fuchsia-700">You Pay</h5>
<div class="flex  items-baseline ">
<span class=" text-2xl font-extrabold text-fuchsia-700">AED 500</span>
<span class=" text-fuchsia-700">/month</span>
</div>
<h5 class="  font-semibold text-gray-900">For 12 months + 5% VAT</h5>
<hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-300"/>
<h5 class="mb text-1xl font-semibold text-sky-500">You Get</h5>
<h5 class="mb text-2xl font-semibold text-sky-500">Power Plan 500</h5>
<hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-300"/>
<div class="flex items-baseline space-x-2">
<span class="line-through text-xl font-extrabold text-gray-300">50</span>
<span class=" text-xl font-extrabold text-gray-900">500 GB</span>

<span class=" text-gray-900">National data</span>
</div>
<div class="flex mt-2 items-baseline space-x-4">
<span class=" text-2xl font-extrabold text-gray-900">1020</span>
<span class=" text-gray-900">Flexi minutes</span>
</div>
<hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-300"/>


{/* <!-- List --> */}
<ul role="list" class="mb-1 space-y-2 text-left">
<li class="flex items-center space-x-3">
{/* <!-- Icon --> */}
<svg class="flex-shrink-0 w-5 h-5 text-gray-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
<span class='text-xs'>No activation fee .Save AED 125</span>
</li>
<li class="flex items-center space-x-3">
{/* <!-- Icon --> */}
<svg class="flex-shrink-0 w-5 h-5 text-gray-900  " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
<span class='text-xs'>4 GB Free data on Wifi UAE</span>
</li>
<li class="flex items-center space-x-3">
{/* <!-- Icon --> */}
<svg class="flex-shrink-0 w-5 h-5 text-gray-900  " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
<span class='text-xs'>Carry over data to next month</span>
</li>
<li class="flex items-center space-x-3">
{/* <!-- Icon --> */}
<svg class="flex-shrink-0 w-5 h-5 text-gray-900  " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
<span class='text-xs'>Amazon Prime on us </span>
</li>



</ul>
<hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-300"/>
<h3 class="w-3/4 h-9 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center p-2 text-s text-gray-100">
Limited Time offer
</h3>
<h4 class="text-s mt-2">The Entertainer on us for 12 months</h4>

<hr class="h-px my-10 bg-gray-200 border-0 dark:bg-gray-300"/>

<div class="flex items-center">
<a href="#" class="text-xs text-gray-900 underline">What you get</a>

<a href="#" class=" flex-1  bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-8 py-3 text-center text-fuchsia-700 dark:focus:ring-primary-900 border border-neutral-300 ml-4">Select</a>
</div>



</div>
</div>
         {/* <!-- Pricing Card --> */}
         <div class="flex-shrink-0">
          
          <div class="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-gray-200  text-gray-100 "></div>
     
<div className="flex flex-col p-6 mx-auto max-w-lg text-gray-900 bg-white rounded- shadow xl:p-8 dark:bg-gray-100 " style={gradientStyle}>




<h5 class="mb text-1xl font-semibold text-fuchsia-700">You Pay</h5>
<div class="flex  items-baseline ">
<span class=" text-2xl font-extrabold text-fuchsia-700">AED 1000</span>
<span class=" text-fuchsia-700">/month</span>
</div>
<h5 class="  font-semibold text-gray-900">For 12 months + 5% VAT</h5>
<hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-300"/>
<h5 class="mb text-1xl font-semibold text-sky-500">You Get</h5>
<h5 class="mb text-2xl font-semibold text-sky-500">Power Plan 1000</h5>
<hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-300"/>
<div class="flex items-baseline space-x-2">
<span class="line-through text-xl font-extrabold text-gray-300">50</span>
<span class=" text-xl font-extrabold text-gray-900">500 GB</span>

<span class=" text-gray-900">National data</span>
</div>
<div class="flex mt-2 items-baseline space-x-4">
<span class=" text-2xl font-extrabold text-gray-900">1020</span>
<span class=" text-gray-900">Flexi minutes</span>
</div>
<hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-300"/>


{/* <!-- List --> */}
<ul role="list" class="mb-1 space-y-2 text-left">
<li class="flex items-center space-x-3">
{/* <!-- Icon --> */}
<svg class="flex-shrink-0 w-5 h-5 text-gray-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
<span class='text-xs'>No activation fee .Save AED 125</span>
</li>
<li class="flex items-center space-x-3">
{/* <!-- Icon --> */}
<svg class="flex-shrink-0 w-5 h-5 text-gray-900  " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
<span class='text-xs'>4 GB Free data on Wifi UAE</span>
</li>
<li class="flex items-center space-x-3">
{/* <!-- Icon --> */}
<svg class="flex-shrink-0 w-5 h-5 text-gray-900  " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
<span class='text-xs'>Carry over data to next month</span>
</li>
<li class="flex items-center space-x-3">
{/* <!-- Icon --> */}
<svg class="flex-shrink-0 w-5 h-5 text-gray-900  " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
<span class='text-xs'>Amazon Prime on us </span>
</li>



</ul>
<hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-300"/>
<h3 class="w-3/4 h-9 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center p-2 text-s text-gray-100">
Limited Time offer
</h3>
<h4 class="text-s mt-2">The Entertainer on us for 12 months</h4>

<hr class="h-px my-10 bg-gray-200 border-0 dark:bg-gray-300"/>

<div class="flex items-center">
<a href="#" class="text-xs text-gray-900 underline">What you get</a>

<a href="#" class=" flex-1  bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-8 py-3 text-center text-fuchsia-700 dark:focus:ring-primary-900 border border-neutral-300 ml-4">Select</a>
</div>



</div>
</div>
        </div>
        
        
    </div>
    </div>
    </div>
  </section>
  )
}
};

export default Home;
