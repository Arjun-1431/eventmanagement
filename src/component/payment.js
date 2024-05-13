import '../component/payment.css'
export default function Payment (){
    return (
        <>
         
         

  <div class="contaainer">
    <div class="forrm">
      <form action="#">
        <div class="flex-row">
          <label for="card-number">Card Number</label>
          <input name="card-number" class="card-number" type="text" value=""/>
        </div>
        <div class="flex-row">
          <label for="card-name">Holder Name</label>
          <input name="card-name" class="card-name" type="text" value=""/>
        </div>
        <div class="flex-row">
          <table>
            <tr>
              <td class="table-column">
                <label for="month">Expiration Date</label>
                <select name="month" id="month-select">
                  <option value="Month" selected disabled>Month</option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
                <select name="year" id="year-select">
                  <option value="Year" selected disabled>Year</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2030">2030</option>
                </select>
              </td>
              <td class="table-column">
                <label for="card-cvv">CVV</label>
                <input name="card-cvv" class="card-cvv" type="text" value=""/>
              </td>
            </tr>
          </table>
        </div>
        <div class="flex-row">
          <input class="card-submit" type="submit"/>
        </div>
      </form>
      <img class="card-image" src="https://pngimg.com/uploads/credit_card/credit_card_PNG99.png" alt="Card image"/>
      <div class="card-image-shadow"></div>
    </div>
  </div>


        </>
    )
}