<!DOCTYPE html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-mail de contato</title>
</head>
<body>
    <h2>Nome do remetente: {{$data['name']}}</h2>
    <h2>E-mail do remetente: {{$data['email']}}</h2>
    <p>Mensagem: {{$data['message']}}</p>
</body>
</html>