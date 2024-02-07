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

        // Generate the contract content dynamically
        let contractContent = `
            <strong><span style="font-weight: bold;">FIXED TERM AGREEMENT</span></strong>
            <p>between</p>
            <div style= "text-align:center;"><strong><span style="font-weight: bold;">BMF ATTORNEYS</span></strong>
            <p><span style="font-weight: bold;">with company registration number 2022/123456/07</span><p></div>
            <p> 
            
            </p>
            <p>and</p>
            <div style= "text-align:center;"><strong><span style="font-weight: bold;">${clientName}</span></strong></div>
           
            <p>Collectively referred herein as the “parties”</p>

            <strong><span style="font-weight: bold;">1. Payment Terms:</span></strong>
           
            <p>\t<li>BMF Attorney’s fee ${serviceCost} (excluding VAT).</li>The retainer
            \tfee can be paid upfront, or month-to-month and the payment terms can be </p> 
            <p> payable as follows:</p>
            <p> <li> Upfront:</li></p>
            <p>Three-twelfths of the fee during the probation period in 3 equal instalments by the 7th day of each month</p>
            <p>Nine-twelfths of the fee upon conclusion of the probation period of employment payable on the 7th day of the 4th month.</p>
            <p><li>Month-to-month:</p>
            <p>The month-to-month fee shall be paid by the 7th day of each month</p>
            <p>No variation or amendment to this Agreement shall be of any effect unless such amendment is put in writing and signed by all parties</p>
            <p>Any documentation prepared by<strong> BMF Attorneys </strong>remains its property</p>

            <strong><p>2. Appointment</p></strong>
            <p> 2.1. The Client has procured the services of<strong> BMF Attorneys </strong> and hereby accepts the appointment as an independent contractor of the Client for a fixed period of time.</p>
            <p> 2.2. The reason for this fixed-term contract <strong>is for the appointment and completion of the ${serviceDescription}</strong></p>

            <strong><p>3. Duration</p></strong>
            <p> 3.1. Notwithstanding the date of signature hereof, this fixed term contract shall be deemed to have commenced on the <strong>${startDate}</strong> and will terminate, without further notice, on the <strong>${endDate}</strong>.</p>
            <p> 3.2. The automatic termination of the contract on the Termination Date shall not be construed as a dismissal but as the completion of a fixed term contract.</p>
        `;

        // Add the "Signed at" and "on" sections with signature lines
        contractContent += `
            <p>Signed at _________________ on _____________________</p>
            <p>____________________________________</p>
            <p>Who warrants authority on behalf of </p>
        `;

        output.innerHTML = contractContent;
    });
});
