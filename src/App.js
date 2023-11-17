
import './App.css';
import { useState } from 'react';

function App() {

  const [ parkingHours, setParkingHours] = useState(1)

  /*const [parkingHoursVip, setParkingHoursVip] = useState(1)
  const [parkingHoursReserved, setParkingHoursReserved] = useState(1)
  const [parkingHoursNormal1, setParkingHoursNormal1] = useState(1)
  const [parkingHoursNormal2, setParkingHoursNormal2] = useState(1)*/

  const parkingCategoryHours = {
    'vip': 5.00,
    'reserved': 0.00,
    'normal': 3.00
  }

  const OnInputValueChanged = (e) => {
    setParkingHours(e.target.value)

  }

  const OnParkingAmountPay = (category) => {
    console.log(parkingHours);
    console.log(category);

    const parkAmount = parkingCategoryHours[category];
    let totalParkingAmount = parseInt(parkingHours) * parseFloat(parkAmount);
    console.log(totalParkingAmount)
    alert( "Thank You For Paying $" + totalParkingAmount)
  }

  return (
    <div className='app-container'>
      <div className='main-container'>
        <h1>Parking Pe</h1>
        <div className='parking-container'>
          <section className='vip-section section'>
            <h2 className='title'>VIP Parking</h2>
            <div className='input-grpup'>
              <label htmlFor='vip'>How many cars you want to park?</label>
              <input className='input-text' type="number" placeholder="How many cars you want to park?" name='vip' id='vip' value={parkingHours} onChange={(e) => OnInputValueChanged(e)} />
            </div>
            <button className='btn' onClick={(e) => OnParkingAmountPay("vip")}>PAY</button>

          </section>
          <section className='reserved-section section'>
          <h2 className='title'>Reserved Parking</h2>
            <div className='input-grpup'>
              <label htmlFor='reserved'>How many cars you want to park?</label>
              <input className='input-text' type="number" placeholder="How many cars you want to park?" name='reserved' id='reserved' value={parkingHours} onChange={(e) => OnInputValueChanged(e)} />
            </div>
            <button className='btn' onClick={(e) => OnParkingAmountPay("reserved")}>PAY</button>
          </section>
          <section className='normal-section section'>
          <h2 className='title'>Normal Parking</h2>
            <div className='input-grpup'>
              <label>How many cars you want to park?</label>
              <input className='input-text' type="number" placeholder="How many cars you want to park?" />
            </div>
            <button className='btn'>PAY</button>
          </section>
          <section className='normal-section section'>
          <h2 className='title'>Normal Parking</h2>
            <div className='input-grpup'>
              <label>How many cars you want to park?</label>
              <input className='input-text' type="number" placeholder="How many cars you want to park?" />
            </div>
            <button className='btn'>PAY</button>
          </section>
        </div>
      </div>
      

    </div>
  );
}
export default App;
