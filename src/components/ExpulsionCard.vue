<template>
<<<<<<< HEAD
  <div class="container">
    <div class="card">
      <h2>Você foi...</h2>
      <img src="@/assets/expulso.jpg" alt="Expulso" />
      <div v-if="showButtons">
        <p>Quer tentar novamente?</p>
        <button class="btn btn-primary" @click="retry(true)">Sim</button>
        <button class="btn btn-danger" @click="retry(false)">Não</button>
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
    document.body.style.overflowY = 'auto';
  },
  beforeUnmount() {
    document.body.style.backgroundImage = '';
  },
  methods: {
    retry(choice) {
      if (choice) {
        this.$router.push('/home');
      } else {
        this.closePage();
      }
    },
    closePage() {
      this.showButtons = false;
      setTimeout(() => {
        window.close();
      }, 3000); 
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
}
</style>
=======
    <div class="container">
      <div class="card">
        <h2>Você foi expulso!</h2>
        <img
          src="@/assets/sai.jpeg"
          alt="Expulso"
        >
        <div v-if="showButtons">
          <p>Quer tentar novamente?</p>
          <button
            class="btn btn-primary"
            @click="retry(true)"
          >
            Sim
          </button>
          <button
            class="btn btn-danger"
            @click="retry(false)"
          >
            Não
          </button>
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
        showButtons: true
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
    },
    beforeUnmount() {
      document.body.style.backgroundImage = '';
    },
    methods: {
      retry(choice) {
        if (choice) {
          this.$router.push('/home');
        } else {
          this.closePage();
        }
      },
      closePage() {
        this.showButtons = false;
        window.close();
        if (!window.closed) {
          alert('Aqueles que quebram as regras são chamados de lixo, mas aqueles que abandonam os seus amigos são piores que lixo!');
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
    overflow: hidden;
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
