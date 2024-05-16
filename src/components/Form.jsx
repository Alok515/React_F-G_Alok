import { Button, Label, TextInput } from "flowbite-react";
import { RadioForm } from "./RadioFrom";
import { useState } from "react";
import validator from "validator";

export const Form = () => {

  const [userName, setName] = useState('');
  const [userEmail, setEmail] = useState('');
  const [userPhone, setPhone] = useState('');
  const [hostRating, setHostRating] = useState(undefined);
  const [drinkRating, setdrinkRating] = useState(undefined);
  const [cleanRating, setCleanRating] = useState(undefined);
  const [overAllRating, setOverAllRating] = useState(undefined);

  const handleSubmit = (event) => {
    event.preventDefault();
    const errorMessage = [];
    if (userEmail === '' || userPhone === '' || userName === '' || hostRating === undefined || drinkRating === undefined || cleanRating === undefined || overAllRating === undefined) {
      errorMessage.push('All Fields are mandatory Please enter them');
    }
    if (!validator.isEmail(userEmail)) {
      errorMessage.push('Please enter a valid email');
    }
    if (!validator.isMobilePhone(userPhone) && (userPhone.length !== 10 || userPhone.length !== 13)) {
      errorMessage.push('Please enter a valid phone number');
    }
    if (errorMessage.length > 0) {
      alert(errorMessage.join('\n'));
      return;
    }

    console.log(userEmail, userName, userPhone, hostRating, drinkRating, cleanRating, overAllRating);
    const data = {
      userName,
      userEmail,
      userPhone,
      hostRating,
      drinkRating,
      cleanRating,
      overAllRating,
    }
    const len = localStorage.length;
    localStorage.setItem(len + 1, JSON.stringify(data));

    alert('Thank you for completing the information');

    window.location.reload();
  }

  const setValues = (state, event) => {
    state(event.target.value);
  }

  return (
    <form className="flex w-1/3 flex-col gap-4 mt-4 m-auto py-8 bg-slate-100 rounded-md shadow-lg border-2 border-solid border-slate-600" onSubmit={handleSubmit}>
      <div>
        <h1 className='text-center text-3xl pt-4 pb-4 font-extrabold'>Aromatic Bar</h1>
        <p className='text-center pb-4 px-2 font-extrabold text-lg'>We are committed to providing you with the best dining
          experience possible, so we welcome your comments. Please fill out this
          questionnaire. Thank you.</p>
      </div>
      <div className="text-3xl m-auto">
        <div className="mx-auto mb-4">
          <div className="mb-2 block">
            <Label htmlFor="name" value="Your name" />
          </div>
          <TextInput className="w-[30rem]" id="name" type="text" placeholder="Name" onChange={() => setValues(setName, event)} value={userName} />
        </div>
        <div className="m-auto mb-4">
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput id="email1" type="email" placeholder="example@mail.com" onChange={() => setValues(setEmail, event)} value={userEmail} />
        </div>
        <div className="m-auto mb-4">
          <div className="mb-2 block">
            <Label htmlFor="phone" value="Your phone number" />
          </div>
          <TextInput id="phone" type="tel" required placeholder="93xxxxxxxx" onChange={() => setValues(setPhone, event)} value={userPhone} />
        </div>
      </div>

      <div className="m-auto">
        <RadioForm question={'1. Please rate the quality of the service you received from your host.'} name={'host_rating'} setRating={setHostRating} optionVal={hostRating} />
        <RadioForm question={'2. Please rate the quality of your beverage.'} name={"beverage_rating"} setRating={setdrinkRating} optionVal={drinkRating} />
        <RadioForm question={'3. Was our restaurant clean?'} name={'clean_rating'} setRating={setCleanRating} optionVal={cleanRating} />
        <RadioForm question={'4. Please rate your overall dining experience.'} name={'overall_rating'} setRating={setOverAllRating} optionVal={overAllRating} />
      </div>

      <Button type="submit" className="bg-blue-400 hover:bg-blue-300 m-auto rounded-md w-[10.2rem] px-14 py-1 shadow-lg"><h1 className="text-center font-bold text-black">Submit</h1></Button>
    </form>
  )
}