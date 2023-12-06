//this function is for submitting
function submitSupportTicket (ticketDetails){
    return `Support ticket #${ticketDeatils, ticketNumber} has been submitted.`;
}

//this fucntion gets and displays support ticket details
function getsupportTicketDetails(ticketNumber){
   //returns the ticket details for a customer with random values
    return{
        ticketNumber,
        CustomerName: "Mike Smith",
        issueType: "network",
        description: "all links direct me to an error code",
        status: "open",
    }
}

//The user can search for existing open support tickets by their name or a ticket number
function searchTicketsByName(customerName){
    return[
        {ticketNumber: "1", status: "open", issueType: "technical" },
        {ticketNumber: "2", status: "open", issueType: "network" },
    ]
}
function searchTicketsByNumber(ticketNumber){
    return { ticketNumber, status: "open", issueType:"software" }
}