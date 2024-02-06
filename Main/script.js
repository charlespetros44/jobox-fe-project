document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contractForm');
    const output = document.getElementById('contractOutput');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const clientName = document.getElementById('clientName').value;
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value;
        const serviceCost = document.getElementById('serviceCost').value;
        const serviceDescription = document.getElementById('serviceDescription').value;

        let boldText = "<strong>BMF ATTORNEYS</strong>";
        // Generate the contract content dynamically
        let contractContent = `
           
            <span style="font-weight: bold;">FIXED TERM AGREEMENT</span>
            <p>between</p>
            <div style= "text-align:center;"><strong><span style="font-weight: bold;">BMF ATTORNEYS</span></strong>
            <p><span style="font-weight: bold;">with company registration number 2022/123456/07</span><p></div>
            <p> 
            
            </p>
            <p>and</p>
            <div style= "text-align:center;"><strong><span style="font-weight: bold;">${clientName}</span></strong></div>
           
            <p>Collectively referred herein as the “parties”</p>


            <span style="font-weight: bold;"></span>


            <span style="font-weight: bold;">1.Payment Terms:</span>
           
            <p>BMF Attorney’s fee ${serviceCost} (excluding VAT).</p>
            <p>The retainer fee can be paid upfront, or month-to-month and the payment terms can be payable as follows:</p>
            <p>Upfront:</p>
            <p>Three-twelfths of the fee during the probation period in 3 equal instalments by the 7th day of each month</p>
            <p>Nine-twelfths of the fee upon conclusion of the probation period of employment payable on the 7th day of the 4th month.</p>
            <p>Month-to-month:</p>
            <p>The month-to-month fee shall be paid by the 7th day of each month</p>
            <p>No variation or amendment to this Agreement shall be of any effect unless such amendment is put in writing and signed by all parties</p>
            <p>Any documentation prepared by BMF Attorneys remains its property</p>
            <p>Appointment</p>
            <p>The Client has procured the services of BMF Attorneys and hereby accepts the appointment as an independent contractor of the Client for a fixed period of time.</p>
            <p>The reason for this fixed-term contract is for the appointment and completion of the ${serviceDescription}</p>
            <p>Duration</p>
            <p>Notwithstanding the date of signature hereof, this fixed term contract shall be deemed to have commenced on the ${startDate} and will terminate, without further notice, on the ${endDate}.</p>
            <p>The automatic termination of the contract on the Termination Date shall not be construed as a dismissal but as the completion of a fixed term contract.</p>
        `;

        // Add the "Signed at" and "on" sections with signature lines
        contractContent += `
            <p>Signed at _________________ on _____________________</p>
            <p>____________________________________</p>
            <p>Who warrants authority on behalf of Jobox</p>
        `;

        output.innerHTML = contractContent;
    });
});
