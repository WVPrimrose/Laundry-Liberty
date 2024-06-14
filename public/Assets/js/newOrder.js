const newOrderHandler = async function (event) {
    event.preventDefault();

    const title = document.querySelector('input[name="order-title"]').value;
    const body = document.querySelector('input[name="order-body"]').value;

    await fetch(`/api/orders`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            body,
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    document.location.replace('/dashboard');
};

document
.querySelector('#new-order-form')
.addEventListener('submit', newOrderHandler);