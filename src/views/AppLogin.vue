<template>
    <b-container class="login-container">
        <h1 class="sr-only">Acessar o sistema</h1>
        <div class="box login-box">
            <b-form action="/dashboard">
                <b-row>
                    <b-col class="box__header">
                        <a href="https://www.cf.coop.br/" class="logo" target="_blank">
                            <span class="sr-only">Abre em uma nova aba </span>
                            <img src="/static/images/cooperforte.png" alt="COOPERFORTE">
                        </a>
                        <h2 class="box__title">Bem-vindo</h2>
                        <p class="box__subtitle">Informe seu e-mail e senha para acessar a aplicação.</p>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <b-form-group
                            id="grupo-usuario"
                            label="E-mail:"
                            label-for="usuario"
                        >
                            <b-form-input
                                id="usuario"
                                type="email"
                                name="email"
                                required
                                placeholder="Informe seu e-mail"
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <b-form-group
                            id="grupo-senha"
                            label="Senha:"
                            label-for="senha"
                            description="Nunca compartilhe sua senha."
                        >
                            <b-form-input
                                id="senha"
                                type="password"
                                required
                                placeholder="Informe sua senha"
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col class="form-buttons">
                        <b-button variant="primary" type="submit    ">Entrar</b-button>
                    </b-col>
                </b-row>
            </b-form>
        </div>
    </b-container>
</template>

<script>
export default {
  name: 'AppLogin',
}
</script>

<style lang="scss" scoped>
  @import '../assets/css/_variables.scss';
  .login-container {
      padding: 110px 0 75px;
  }

  .login-box {
      width: 90%;
      max-width: 600px;
      margin: 0 auto;
  }

  .logo {
      position: absolute;
      top: 0;
      right: 15px;
      @include sm {
        position: initial;
        margin-bottom: 15px;
        display: block;
      }
  }
</style>