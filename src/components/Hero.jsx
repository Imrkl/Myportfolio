function Hero({ language }) {
  const text = {
    ru: {
      title: 'Привет, меня зовут Марк',
      description:
        'Мне 17 лет, живу в Ташкенте. Ниже показаны проекты которые я делал.'
    },

    en: {
      title: 'Hello, my name is Mark',
      description:
        'I am 17 years old and live in Tashkent. Below are projects I have created.'
    }
  }

  const myPhoto = `${import.meta.env.BASE_URL}My.jpg`

  return (
    <section className="hero">
      <div className="photo-placeholder">
        <img src={myPhoto} alt="Mark" />
      </div>

      <div className="hero-text">
        <h1>{text[language].title}</h1>
        <p>{text[language].description}</p>
      </div>
    </section>
  )
}

export default Hero