<template>
  <h2>請開啟開發者工具</h2>
</template>
<script>
export default {
  methods: {
    getAuthorizationHeader() {
      const parameter = {
        grant_type: 'client_credentials',
        client_id: `${process.env.VUE_APP_TDXID}`,
        client_secret: `${process.env.VUE_APP_TDXKEY}`,
      };
      this.$http({
        method: 'POST',
        url: `${process.env.VUE_APP_AUTHORIZATIONAPI}`,
        dataType: 'JSON',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        },
        data: this.$qs.stringify(parameter),
      })
        .then((res) => {
          console.log(res);
          // 使用 axios 全域預設配置 config
          this.$http.defaults.headers.common.Authorization = `Bearer ${res.data.access_token}`;
          this.getBus();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getBus() {
      const url = `${process.env.VUE_APP_TDXAPI}api/basic/v2/Bus/StopOfRoute/City/Taipei?%24top=20&%10format=JSON`;
      this.$http(url)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getAuthorizationHeader();
  },
};
</script>
