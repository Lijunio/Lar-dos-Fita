<template>
  <div class="container">
    <p ref="line1" class="main-text" />
    <p ref="line2" class="main-text" />
    <div v-if="showOptions" class="card">
      <p>Porem já que você teve que subir 4 lances de escada pois temos um bode e por isso ele precisa de espaço, dito isso você poderá mandar mensagem para um dos donos da casa.</p>
      <div class="buttons" v-if="showButtons">
        <button class="btn btn-pink" @click="contactDanielle">
          Danielle
        </button>
        <button class="btn btn-primary" @click="contactElias">
          Elias
        </button>
        <button class="btn btn-danger" @click="closePage">
          Desisto
        </button>
      </div>
    </div>
    <div v-if="showMessage" class="message-overlay">
      <div class="message-card">
        <img src="@/assets/churrasco.jpg" alt="Imagem de desculpas" class="message-image" />
        <p class="justified-message">{{ message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import background from '@/assets/background.jpg';

export default {
  data() {
    return {
      backgroundImage: `url(${background})`,
      showOptions: false,
      showButtons: true,
      showMessage: false,
      message: ''
    };
  },
  mounted() {
    document.body.style.backgroundImage = this.backgroundImage;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.height = '100%';
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';

    this.typeText(this.$refs.line1, "Se você não foi convidado para o lar dos fita, o que veio fazer aqui?", () => {
      this.typeText(this.$refs.line2, "Só pode entrar se for convidado.", () => {
        setTimeout(() => {
          this.showOptions = true;
        }, 3000); // delay
      });
    });
  },
  methods: {
    typeText(element, text, callback) {
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          element.innerHTML += text[index];
          index++;
        } else {
          clearInterval(interval);
          if (callback) callback();
        }
      }, 100);
    },
    contactDanielle() {
      const message = encodeURIComponent("Dani, pelo amor de Deus, deixa eu entrar na sua casa!!!!!");
      window.location.href = `https://wa.me/5531997077639?text=${message}`;
    },
    contactElias() {
      const message = encodeURIComponent("Eu trouxe cerveja e carne, deixa eu entrar na sua casa!!!");
      window.location.href = `https://wa.me/5531973112693?text=${message}`;
    },
    closePage() {
      this.showButtons = false;
      this.showMessage = true;
      this.message = 'Repense suas atitudes, vá ao BH que é próximo daqui. Compre cerveja e carnes como forma de desculpas. Você estará fazendo duas coisas boas, ajudando o Cruzeiro e trazendo cerveja';
      setTimeout(() => {
        alert('Se você desiste tão fácil assim realmente não é bem vindo kkkkkkk');
        this.$router.push('/'); 
      }, 15000); // 15 segundos
    }
  },
  beforeUnmount() {
    document.body.style.backgroundImage = '';
  }
};
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  padding: 16px;
  text-align: center;
  box-sizing: border-box;
}

.main-text {
  font-size: 1.5em;
  text-align: justify;
  color: black;
}

.card {
  background-color: rgba(122, 82, 44, 0.5);
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin-top: 5px;
  text-align: justify;
  color: white;
}

.card p {
  font-size: 1.2em;
  margin-bottom: 16px;
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

button {
  padding: 8px 10px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  margin: 8px 0;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-pink {
  background-color: #ff69b4;
  color: white;
}

.btn-danger {
  background-color: #dc3545;
  color: white;
}

.message-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
}

.message-card {
  background-color: rgba(0, 56, 168, 0.9);
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
}

.message-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 16px;
}

.message-overlay p {
  font-size: 1.5em;
  color: white;
  margin: 0 16px;
  text-align: justify;
}

@media (max-width: 600px) {
  .card {
    padding: 16px;
  }

  button {
    width: 100%;
    margin: 8px 0;
  }
}
</style>
