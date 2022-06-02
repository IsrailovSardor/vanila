export const renderTestimonials = () => {
    const getTestimonials = async () => {
        const got = await fetch("../../config.json");
        const config = await got.json();
        let testimonials = config.testimonials

        document.getElementById('user__text-one').textContent = testimonials[0].text
        document.getElementById('user__name-one').textContent = testimonials[0].name
        document.getElementById('user__job-one').textContent = testimonials[0].job

        document.getElementById('user__text-two').textContent = testimonials[1].text
        document.getElementById('user__name-two').textContent = testimonials[1].name
        document.getElementById('user__job-two').textContent = testimonials[1].job

        document.getElementById('user__text-three').textContent = testimonials[2].text
        document.getElementById('user__name-three').textContent = testimonials[2].name
        document.getElementById('user__job-three').textContent = testimonials[2].job
    };
    getTestimonials();
}
export const renderRadiobutton = () => {
    const getRadiobutton = async () => {
        const got = await fetch("../../config.json");
        const config = await got.json();
        let radioButton = config.plans

        document.querySelector('.standert').textContent = radioButton[0].name
        document.querySelector('.premium').textContent = radioButton[1].name
        document.querySelector('.lifetime').textContent = radioButton[2].name

    };
    getRadiobutton();
}