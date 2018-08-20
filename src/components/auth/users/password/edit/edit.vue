<template>
  <div class="password-reset">
    <el-card style="width: 100%;">

      <div slot="header" class="clearfix">
        <span>
          {{$t('auth.passwordConfirmation.title')}}
        </span>
      </div>

      <el-form ref="form" :model="form" :rules="rules" :label-position="labelPosition" label-width="100px" :status-icon=true>

        <el-alert v-if="hasUpdatePasswordErrors"
          :title="$t('forms.errors.serverErrorMessage')"
          :description="updatePasswordErrors"
          type="error">
        </el-alert>

        <el-form-item prop="password" :label="$t('forms.labels.password')">
          <el-input v-model.trim="form.password" :placeholder="$t('forms.placeholders.password')" type="password"/>
        </el-form-item>

        <el-form-item prop="passwordConfirmation" :label="$t('forms.labels.passwordConfirmation')">
          <el-input v-model.trim="form.passwordConfirmation" :placeholder="$t('forms.placeholders.passwordConfirmation')" type="password"/>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit()">
            {{ $t('buttons.confirmPassword') }}
          </el-button>
        </el-form-item>

      </el-form>
    </el-card>
  </div>
</template>

<script src='./config.js'></script>
<style scoped lang='scss' src='./styles.scss'></style>
