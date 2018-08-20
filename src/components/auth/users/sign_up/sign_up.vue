<template>
  <div class="sign_up">
    <el-card style="width: 100%;">

      <div slot="header" class="clearfix">
        <span>
          {{$t('auth.signUp.title')}}
        </span>
      </div>

      <el-form ref="form" :model="form" :rules="rules" :label-position="labelPosition" label-width="100px" :status-icon=true>

        <el-alert v-if="hasSignUpErrors"
          :title="$t('forms.errors.serverErrorMessage')"
          :description="signUpErrors"
          type="error">
        </el-alert>

        <el-form-item prop="name" :label="$t('forms.labels.name')">
          <el-input v-model.trim="form.name" :placeholder="$t('forms.placeholders.name')"  />
        </el-form-item>

        <el-form-item prop="email" :label="$t('forms.labels.email')">
          <el-input v-model.trim="form.email" :placeholder="$t('forms.placeholders.email')"/>
        </el-form-item>

        <el-form-item prop="password" :label="$t('forms.labels.password')">
          <el-input v-model.trim="form.password" :placeholder="$t('forms.placeholders.password')" type="password"/>
        </el-form-item>

        <el-form-item prop="passwordConfirmation" :label="$t('forms.labels.passwordConfirmation')">
          <el-input v-model.trim="form.passwordConfirmation" :placeholder="$t('forms.placeholders.passwordConfirmation')" type="password"/>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit()">
            {{ $t('buttons.register') }}
          </el-button>
        </el-form-item>

      </el-form>
    </el-card>
  </div>
</template>

<script src='./config.js'></script>
<style scoped lang='scss' src='./styles.scss'></style>
