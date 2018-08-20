<template>
  <div class="password-email">
    <el-card style="width: 100%;">
      <div slot="header" class="clearfix">
        <span>
          {{$t('auth.passwordEmail.title')}}
        </span>
      </div>
      <el-form ref="form" :model="form" :rules="rules" :label-position="labelPosition" label-width="100px" :status-icon=true>
        <el-alert v-if="hasRequestPasswordErrors"
          :title="$t('forms.errors.serverErrorMessage')"
          :description="requestPasswordErrors"
          type="error">
        </el-alert>

        <el-form-item prop="email" :label="$t('forms.labels.email')">
          <el-input v-model.trim="form.email" :placeholder="$t('forms.placeholders.email')"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit()">
            {{ $t('buttons.recoverPassword') }}
          </el-button>
        </el-form-item>

      </el-form>
    </el-card>
  </div>
</template>

<script src='./config.js'></script>
<style scoped lang='scss' src='./styles.scss'></style>
