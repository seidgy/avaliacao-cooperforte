<template>
    <b-container fluid class="dashboard-container" :class="{'show-data': showData}">
        <h1 class="sr-only">COOPERFORTE - Dashboard</h1>
        <b-row>
          <b-col sm="12" md="2" class="sidebar">
            <a href="https://www.cf.coop.br/" class="logo" target="_blank">
                <span class="sr-only">Abre em uma nova aba </span>
                <img src="/static/images/cooperforte.png" alt="COOPERFORTE">
            </a>
            <div class="user-data">
              <b-form-group
                  id="grupo-cpf"
                  label="Cliente:"
                  label-for="cpf"
                  description="Informe apenas números."
              >
                  <b-form-input
                      id="cpf"
                      type="text"
                      name="cpf"
                      placeholder="Informe o CPF do cliente"
                      maxlength="11"
                      @keypress="isNumberKey"
                      v-model="cpf"
                  ></b-form-input>
              </b-form-group>
              <div class="user-data__line text-center">
                <div class="user-data__portrait" :style="'background-image: url(/static/images/'+(this.showData?'person.jpg':'person-icon.png')+')'"></div>
                <p class="user-data__name text text--big text--semibold">{{ showData?'Gabriel de Freitas':'-' }}</p>
                <b-badge variant="success" v-if="showData">Baixo risco</b-badge>
              </div>
              <div class="user-data__line" v-if="showData">
                <p class="user-data__label text text--small text--semibold">Data de nascimento</p>
                <p class="user-data__info text text--small">03/10/1987</p>
              </div>
              <div class="user-data__line" v-if="showData">
                <p class="user-data__label text text--small text--semibold">RG</p>
                <p class="user-data__info text text--small">35.113.941-2</p>
              </div>
              <div class="user-data__line" v-if="showData">
                <p class="user-data__label text text--small text--semibold">Endereço</p>
                <p class="user-data__info text text--small">Rua Vinte de Setembro casa 36</p>
              </div>
              <div class="user-data__line" v-if="showData">
                <p class="user-data__label text text--small text--semibold">CEP</p>
                <p class="user-data__info text text--small">89053-250</p>
              </div>
              <div class="user-data__line" v-if="showData">
                <p class="user-data__label text text--small text--semibold">Renda mensal</p>
                <p class="user-data__info text text--small">R$ 4.352,00</p>
              </div>
            </div>
          </b-col>
          <b-col sm="12" md="10" class="content">
            <b-row v-if="!showData" class="content__no-data">
              <b-col>
                <p class="text text-highlight position-center">Para iniciar informe o CPF do cliente.</p>
              </b-col>
            </b-row>
            <div v-else>
              <b-row>
                <b-col cols="12" class="dash-header">
                  <p class="dash-header__values text">Saldo devedor: <span class="text text--semibold low">R$ 3.560,00</span></p>
                  <p class="dash-header__values text">Limite de crédito: <span class="text text--semibold low">R$ 54.000,00</span></p>
                  <p class="dash-header__values text">Saldo em aplicações: <span class="text text--semibold high">R$ 515,00</span></p>
                </b-col>
                <b-col cols="12" class="dash-body">
                  <b-row>
                    <b-col sm="12" md="9">
                      <b-row>
                        <b-col sm="12" md="6">
                          <div class="dash-card">
                            <h3 class="dash-title">Dívidas</h3>
                            <b-button variant="primary" class="top-right" size="sm">Simular</b-button>
                            <b-table hover :items="dividas"></b-table>
                            <div class="dash-card__buttons">
                              <b-button variant="primary">Quitar</b-button>
                              <b-button variant="secondary">Amortizar</b-button>
                              <b-button variant="secondary">Antecipar</b-button>
                              <b-button variant="secondary">Renovar</b-button>
                            </div>
                          </div>
                        </b-col>
                        <b-col sm="12" md="6">
                          <div class="dash-card">
                            <h3 class="dash-title">Aplicações</h3>
                            <b-button variant="primary" class="top-right" size="sm">Simular</b-button>
                            <div class="aplicacao-info">
                              <p class="text">Saldo acumulado: R$ 515,00</p>
                              <p class="text">Saldo neste mês: R$ 13,75</p>
                              <p class="text">Previsão de desconto IR: R$ 2,63</p>
                            </div>
                            <h4>Próximos lançamentos </h4>
                            <b-table hover :items="aplicacoes"></b-table>
                          </div>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col>
                          <div class="dash-card">
                            <h3 class="dash-title">Renda nos últimos 6 meses</h3>
                            <highcharts :options="chartOptions"></highcharts>
                          </div>
                        </b-col>
                      </b-row>
                    </b-col>
                    <b-col sm="12" md="3">
                      <b-row>
                        <b-col>
                          <div class="dash-card">
                            <h3 class="dash-title">Impedimentos ou restrições</h3>
                            <b-list-group class="resticoes">
                              <b-list-group-item class="d-flex justify-content-between align-items-center text restricoes__info">
                                <b-icon icon="check-circle" scale="2" variant="success"></b-icon>
                                BACEN
                              </b-list-group-item>
                              <b-list-group-item class="d-flex justify-content-between align-items-center text restricoes__info">
                                <b-icon icon="check-circle" scale="2" variant="success"></b-icon>
                                SERASA
                              </b-list-group-item>
                              <b-list-group-item class="d-flex justify-content-between align-items-center text restricoes__info">
                                <b-icon icon="x-circle" scale="2" variant="danger"></b-icon>
                                SPC
                              </b-list-group-item>
                            </b-list-group>
                          </div>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col>
                          <div class="dash-card">
                            <h3 class="dash-title">Produtos para este perfil</h3>
                            <div class="accordion" role="tablist">
                              <b-card no-body class="mb-1">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                  <b-button block v-b-toggle.accordion-1>Produto 1</b-button>
                                </b-card-header>
                                <b-collapse id="accordion-1" accordion="acc-produtos" role="tabpanel">
                                  <b-card-body>
                                    <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget tempor eros. Vivamus sed ante condimentum, aliquet sem sed, aliquet purus. Cras laoreet sapien faucibus turpis faucibus, id iaculis magna auctor.</p>
                                    <b-button block variant="primary" class="mg-top">Contratar</b-button>
                                  </b-card-body>
                                </b-collapse>
                              </b-card>
                              <b-card no-body class="mb-1">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                  <b-button block v-b-toggle.accordion-2>Produto 2</b-button>
                                </b-card-header>
                                <b-collapse id="accordion-2" accordion="acc-produtos" role="tabpanel">
                                  <b-card-body>
                                    <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget tempor eros. Vivamus sed ante condimentum, aliquet sem sed, aliquet purus. Cras laoreet sapien faucibus turpis faucibus, id iaculis magna auctor.</p>
                                    <b-button block variant="primary" class="mg-top">Contratar</b-button>
                                  </b-card-body>
                                </b-collapse>
                              </b-card>

                              <b-card no-body class="mb-1">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                  <b-button block v-b-toggle.accordion-3>Produto 3</b-button>
                                </b-card-header>
                                <b-collapse id="accordion-3" accordion="acc-produtos" role="tabpanel">
                                  <b-card-body>
                                    <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget tempor eros. Vivamus sed ante condimentum, aliquet sem sed, aliquet purus. Cras laoreet sapien faucibus turpis faucibus, id iaculis magna auctor.</p>
                                    <b-button block variant="primary" class="mg-top">Contratar</b-button>
                                  </b-card-body>
                                </b-collapse>
                              </b-card>

                              <b-card no-body class="mb-1">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                  <b-button block v-b-toggle.accordion-3>Produto 4</b-button>
                                </b-card-header>
                                <b-collapse id="accordion-3" accordion="acc-produtos" role="tabpanel">
                                  <b-card-body>
                                    <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget tempor eros. Vivamus sed ante condimentum, aliquet sem sed, aliquet purus. Cras laoreet sapien faucibus turpis faucibus, id iaculis magna auctor.</p>
                                    <b-button block variant="primary" class="mg-top">Contratar</b-button>
                                  </b-card-body>
                                </b-collapse>
                              </b-card>

                              <b-card no-body class="mb-1">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                  <b-button block v-b-toggle.accordion-3>Produto 5</b-button>
                                </b-card-header>
                                <b-collapse id="accordion-3" accordion="acc-produtos" role="tabpanel">
                                  <b-card-body>
                                    <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget tempor eros. Vivamus sed ante condimentum, aliquet sem sed, aliquet purus. Cras laoreet sapien faucibus turpis faucibus, id iaculis magna auctor.</p>
                                    <b-button block variant="primary" class="mg-top">Contratar</b-button>
                                  </b-card-body>
                                </b-collapse>
                              </b-card>
                            </div>
                          </div>
                        </b-col>
                      </b-row>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
            </div>
          </b-col>

        </b-row>
    </b-container>
</template>

<script>
export default {
  name: 'AppDashboard',
  data() {
    return {
      cpf: null,
      dividas: [
        {
          tipo: 'Crédito consignado 4/12',
          vencimento: '15/09/2020',
          valor_R$: '445,00',
          status: 'Pago',
          _rowVariant: 'success'
        },
        {
          tipo: 'Crédito consignado 5/12',
          vencimento: '15/10/2020',
          valor_R$: '445,00',
          status: 'Em atraso',
          _rowVariant: 'danger'
        },
        {
          tipo: 'Crédito consignado 6/12',
          vencimento: '15/11/2020',
          valor_R$: '445,00',
          status: 'A vencer'
        },
      ],
      aplicacoes: [
        {
          tipo: 'Crédito',
          data: '10/11/2020',
          valor_R$: '18,00',
          _rowVariant: 'success'
        },
        {
          tipo: 'Débito',
          data: '15/11/2020',
          valor_R$: '5,00',
          _rowVariant: 'danger'
        },
        {
          tipo: 'Crédito',
          data: '10/12/2020',
          valor_R$: '18,00',
          _rowVariant: 'sucess'
        },
      ],
      chartOptions: {
        title: {
          text: ''
        },
        yAxis: {
            title: {
                text: ''
            }
        },
        xAxis: {
          categories: ['MAI/2020','JUN/2020','JUL/2020','AGO/2020','SET/2020','OUT/2020'],
          title: {
              text: 'Mês'
          }
        },
        series: [{
          name: 'Renda mensal',
          data: [
            4343.56,
            4359.63,
            4538.12,
            4416.45,
            4343.69,
            4357.78,
          ]
        },
        {
          name: 'Saldo devedor',
          data: [
            5340.00,
            4895.00,
            4450.00,
            4005.00,
            3560.00,
            3560.00,
          ]
        },
        {
          name: 'Saldo em aplicações',
          data: [
            430.00,
            448.00,
            465.00,
            480.00,
            497.00,
            515.00,
          ]
        }
        ]
      }
    }
  },
  computed: {
    showData() {
      return this.cpf && this.cpf.length == 11 ? true : false;
    }
  },
  methods: {
    isNumberKey(evt){
      var charCode = (evt.which) ? evt.which : evt.keyCode
      if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
      return true;
    }
  },  
}
</script>

<style lang="scss" scoped>
  @import '../assets/css/_variables.scss';
  p {
    margin-bottom: 0;
  }

  .logo {
    margin-bottom: 15px;
    display: block;
  }

  .sidebar {
    box-shadow: 6px 2px 8px 2px rgba($fontrgb,0.25);
    background-color: $lc1;
    padding: 16px 15px;
    z-index: 1;
  }

  .content {
    min-height: 100vh;
  }

    .content__no-data {
      min-height: 100vh;
    }

  .form-group {
    margin-bottom: 30px;
  }

    .user-data__portrait {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      background-position: bottom center;
      background-size: cover;
      margin: 0 auto 15px auto;
    }

    .user-data__line {
      margin-bottom: 15px;
      p {
        margin-bottom: 5px;
      }
    }

    .user-data__name {
      text-align: center;
    }

  .dash-header {
    background-color: $lc2;
    padding: 15px 20px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    box-shadow: 2px 6px 8px 2px rgba($fontrgb,0.25);
    @include sm {
      flex-direction: column;
      gap: 15px;
    }
  }

  .dash-body {
    padding: 25px 35px;
    .row {
      margin-bottom: 30px;
    }
  }

  .dash-card {
    padding: 15px;
    border-radius: 10px;
    box-shadow: 2px 6px 8px 2px rgba($fontrgb,0.25);
    height: 100%;
    position: relative;
    h3 {
      font-size: 1.5rem;
    }
    h4 {
      font-size: 1.125rem;
    }
  }

    .dash-card__buttons {
      display: flex;
      gap: 10px;
    }

  .aplicacao-info {
    margin-bottom: 15px;
  }

  .low {
    color: #237a00;
  }

  .high {
    color: #7a1600;
  }

  .table {
    font-size: 0.875rem;
  }
</style>