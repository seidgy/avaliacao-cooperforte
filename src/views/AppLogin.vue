<template>
    <b-container class="login-container">
        <div class="box login-box">
            <b-form>
                <b-row>
                    <b-col class="box__header">
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
                        <b-button variant="primary">Entrar</b-button>
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
</style>