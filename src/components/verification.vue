<template>
  <div class="ys-verification">
    <div class="input-wrapper" v-for="item in amount" :key="item">
      <input  @paste="handlePaste" title="code" v-focus="(item - 1) === currentIndex" maxlength="2" @input="handleInput($event,(item-1))" @keydown.delete="onDelete($event,(item-1))"  v-model="code[item-1]">
    </div>
  </div>
</template>

<script>
export default {
  name: 'VerificationCodeInput',
  props: {
    amount: {
      type: Number,
      default: 4
    }
  },
  directives: {
    focus: {
      componentUpdated: function (el, obj) {
          console.log(el,obj)
        obj.value && el.focus()
      }
    }
  },
  created () {
    this.code = new Array(this.amount).fill('')
  },
  methods: {
    handleInput (e, index) {
        console.log(e)
    console.log(this.code[index - 1])

      this.currentIndex = index
      e.target.value = this.validateNumber(e.data,index)
      e.target.value !== '' && ++this.currentIndex
      !this.code.includes('') && this.$emit('onCompleted', this.code.join(''))
    },
    onDelete (e, index) {
        // console.log(e.path[0].focus())
      if (e.target.value === '') {
        this.currentIndex = index - 1
      }
    },
    validateNumber (val,idx) {
        this.code.splice(idx,1,val.replace(/\D/g, ''))
        console.log(val.replace(/\D/g, ''))
      return val.replace(/\D/g, '')
    },
    handlePaste (e) {
        console.log(e)
      e.preventDefault()
    }
  },
  data () {
    return {
      code: [],
      currentIndex: 0
    }
  }
}
</script>

<style lang="scss" scoped>
  .ys-verification{
    width:100%;
    display: flex;
    justify-content: space-around;

    .input-wrapper{
      border-bottom: 1px solid #D6D6D6;
      width: 15%;
      height: 0;
      padding-bottom:20%;
      position: relative;

      input{
        position: absolute;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: all 0.3s;
        font-size: 7vw;
        color: #333333;
      }

    }

    input:focus{
      border-bottom: 1px solid #666666;
    }
  }
</style>

