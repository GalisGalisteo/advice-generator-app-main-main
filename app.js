const fetchAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
    if (!response.ok) {
        throw new Error('Error fetching advice');
    }
    const data = await response.json();
    return data;
}

const diceButton = document.querySelector('#dice-button');
diceButton.addEventListener('click', async () => {
    const adviceId = document.querySelector('#advice-id');
    const adviceText = document.querySelector('#advice-text');
    try {
        const advice = await fetchAdvice();
        adviceId.textContent = advice.slip.id;
        adviceText.textContent = advice.slip.advice;
    } catch (error){
        adviceId.textContent = 'Error'
        adviceText.textContent = "Ups! We can't retrieve the data, try again later!"
        console.error(error);
    }
})