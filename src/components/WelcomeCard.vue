<template>
<<<<<<< HEAD
  <div class="container">
    <div class="card">
      <h2>Bem-vindos ao Lar dos Fita</h2>
      <img src="@/assets/cascaDeBala.jpeg" alt="Bem-vindo" />
      <p>Você quer conectar ao Wi-Fi?</p>
      <div v-if="showWifiDetails" class="message-card">
        <p>SSID: Lar dos Fita 🎀</p>
        <p>Senha: Fita@2024</p>
        <button class="btn btn-secondary" @click="closePage">Sair</button>
      </div>
      <div v-else>
        <button class="btn btn-primary" @click="promptPassword">Sim</button>
        <button class="btn btn-danger" @click="showWifi(false)">Não</button>
      </div>
      <div v-if="showMessage" class="message-card">
        <p>{{ message }}</p>
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
      showWifiDetails: false,
      showMessage: false,
      message: '',
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
    document.body.style.overflowY = 'auto';
  },
  beforeUnmount() {
    document.body.style.backgroundImage = '';
  },
  methods: {
    promptPassword() {
      const riddle = "Você precisa acertar essa charada se quiser ver a senha!\nTenho apenas um dígito, mas sou maior que zero. Qual número sou eu?\n\nDica:\nSou o começo de tudo, mas não sou o fim.\nSou a base de todos os números, mas sou único.";
      
      alert(riddle);
      
      const userAnswer = prompt("Qual é a resposta?");
      
      if (userAnswer.toLowerCase() === '1') {
        this.showWifi(true);
      } else {
        alert('Resposta incorreta. Tente novamente.');
      }
    },
    showWifi(choice) {
      if (choice) {
        this.showWifiDetails = true;
        this.showMessage = false;
      } else {
        this.message = 'Ou você é rico para ter um pacote de dados muito grande ou já não é a primeira vez que você vem aqui.';
        this.showMessage = true;
      }
    },
    closePage() {
      this.message = 'Por favor, feche a aba do navegador manualmente. Pois ainda não consigo controlar 100% seu celular, ainda...';
      this.showMessage = true;
    },
  },
};
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow-y: auto;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  padding: 16px;
  text-align: center;
  box-sizing: border-box;
}

h2 {
  font-size: 2em;
  color: black;
}

p {
  font-size: 1.5em;
  color: black;
}

.card {
  background-color: rgba(122, 82, 44, 0.5); 
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 400px;
  margin-bottom: 16px;
  flex-shrink: 0;
}

.message-card {
  background-color: rgba(255, 255, 255, 0.7); 
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 16px;
  flex-shrink: 0;
}

.card img {
  width: 100%;
  max-width: 350px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 16px;
}

.card button {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin: 8px;
}

.card .btn-primary {
  background-color: #007bff;
  color: white;
}

.card .btn-danger {
  background-color: #dc3545;
  color: white;
}

.card .btn-secondary {
  background-color: black;
  color: white;
}

@media (max-width: 600px) {
  h2 {
    font-size: 1.5em;
  }

  p {
    font-size: 1.2em;
  }

  .card {
    padding: 16px;
  }

  .card img {
    max-width: 300px;
  }

  .card button {
    width: 100%;
    margin: 8px 0;
    font-size: 14px;
    padding: 10px 20px;
  }

  .message-card {
    padding: 12px;
  }
}
</style>
=======
    <div class="container">
      <div class="card">
        <h2>Bem-vindos ao Lar dos Fitas</h2>
        <img
          src="@/assets/cascaDeBala.jpeg"
          alt="Bem-vindo"
        >
        <p>Você quer conectar ao Wi-Fi?</p>
        <div
          v-if="showWifiDetails"
          class="message-card"
          ref="wifiDetails"
        >
          <p>SSID: Lar dos Fitas 🎀</p>
          <p>Senha: Lijunio2012k9#</p>
          <button
            class="btn btn-secondary"
            @click="closePage"
          >
            Sair
          </button>
        </div>
        <div v-else>
          <button
            class="btn btn-primary"
            @click="showWifi(true)"
          >
            Sim
          </button>
          <button
            class="btn btn-danger"
            @click="showWifi(false)"
          >
            Não
          </button>
        </div>
        <div
          v-if="showMessage"
          class="message-card"
          ref="message"
        >
          <p>{{ message }}</p>
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
        showWifiDetails: false,
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
    },
    beforeUnmount() {
      document.body.style.backgroundImage = '';
    },
    methods: {
      showWifi(choice) {
        if (choice) {
          this.showWifiDetails = true;
          this.showMessage = false;
          this.$nextTick(() => {
            this.$refs.wifiDetails.scrollIntoView({ behavior: 'smooth' });
          });
        } else {
          this.message = 'Ou você é rico para ter um pacote de dados muito grande ou já não é a primeira vez que você vem aqui.';
          this.showMessage = true;
          this.$nextTick(() => {
            this.$refs.message.scrollIntoView({ behavior: 'smooth' });
          });
        }
      },
      closePage() {
        window.close();
        if (!window.closed) {
          this.message = 'Por favor, feche a aba do navegador manualmente. Pois ainda não consigo controlar 100% seu celular, ainda...';
          this.showMessage = true;
          this.$nextTick(() => {
            this.$refs.message.scrollIntoView({ behavior: 'smooth' });
          });
        }
      }
    }
  };
  </script>
  
  <style scoped>
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow-y: auto;
  }
  
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 16px;
    text-align: center;
    box-sizing: border-box;
  }
  
  h2 {
    font-size: 2em;
    color: black;
  }
  
  p {
    font-size: 1.5em;
    color: black;
  }
  
  .card {
    background-color: rgba(122, 82, 44, 0.5); 
    padding: 24px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 100%;
    max-width: 400px;
  }
  
  .message-card {
    background-color: rgba(255, 255, 255, 0.7); 
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-top: 16px;
  }
  
  .card img {
    width: 100%;
    max-width: 350px;
    height: auto;
    border-radius: 8px;
    margin-bottom: 16px;
  }
  
  .card button {
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    margin: 8px;
  }
  
  .card .btn-primary {
    background-color: #007bff;
    color: white;
  }
  
  .card .btn-danger {
    background-color: #dc3545;
    color: white;
  }
  
  .card .btn-secondary {
    background-color: black;
    color: white;
  }
  
  @media (max-width: 600px) {
    .card {
      padding: 16px;
    }
  
    .card button {
      width: 100%;
      margin: 8px 0;
    }
  }
  </style>
  
>>>>>>> 94555bbb (first commit)
