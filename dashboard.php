<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ticket Support System</title>
    <style>
        .sidebar {
            float: left;
            width: 30%;
            height: 100vh;
            background-color: #f2f2f2;
            padding: 20px;
            overflow-y: auto;
        }

        .ticket-list {
            margin-bottom: 10px;
            cursor: pointer;
        }

        .ticket-details {
            float: left;
            width: 70%;
            height: 100vh;
            padding: 20px;
        }
    </style>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>

<body>
    <div class="sidebar" id="sidebar"></div>
    <div class="ticket-details" id="ticketDetails"></div>

    <script>
        function fetchTickets() {
            $.ajax({
                url: 'fetch_ticketss.php',
                type: 'GET',
                dataType: 'json',
                success: function(tickets) {
                    var sidebar = $('#sidebar');
                    sidebar.empty();

                    tickets.forEach(function(ticket) {
                        var ticketDiv = $('<div>').addClass('ticket-list');
                        ticketDiv.text('Ticket #' + ticket.id + ' - ' + ticket.username);
                        ticketDiv.click(function() {
                            displayTicketDetails(ticket.id);
                        });
                        sidebar.append(ticketDiv);
                    });
                },
                error: function() {
                    console.error('Error occurred while fetching tickets.');
                }
            });
        }

        function displayTicketDetails(ticketId) {
            $.ajax({
                url: 'get_ticket_details.php',
                type: 'GET',
                data: { id: ticketId },
                dataType: 'json',
                success: function(ticket) {
                    var ticketDetails = $('#ticketDetails');
                    ticketDetails.empty();

                    var detailsDiv = $('<div>');
                    detailsDiv.text('Ticket #' + ticket.id);
                    detailsDiv.append($('<br>Username: ' + ticket.username));
                    detailsDiv.append($('<br>Email: ' + ticket.email));
                    detailsDiv.append($('<br>Status: ' + ticket.status));
                    detailsDiv.append($('<br>Created At: ' + ticket.created_at));

                    ticketDetails.append(detailsDiv);
                },
                error: function() {
                    console.error('Error occurred while fetching ticket details.');
                }
            });
        }

        $(document).ready(function() {
            fetchTickets();
            setInterval(fetchTickets, 5000); // Fetch tickets every 5 seconds for real-time updates
        });
    </script>
</body>

</html>
