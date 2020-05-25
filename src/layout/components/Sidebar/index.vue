<template>
  <div :class="{'has-logo':true}">
    <logo />

    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :active-text-color="variables.menuActiveText"
        :unique-opened="false"
        :collapse-transition="false"
        :router="true"
        mode="vertical"
      >
        <el-menu-item index="/test1">
          <i class="el-icon-menu" />
          <span slot="title">导航一</span>
        </el-menu-item>

        <el-menu-item index="/test2">
          <i class="el-icon-menu" />
          <span slot="title">导航二</span>
        </el-menu-item>

      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import Logo from './Logo'

import variables from '@/styles/variables.scss'

export default {
  components: {
    Logo
  },
  computed: {
    activeMenu() {
      // highlight the path

      const route = this.$route
      const { meta, path } = route
      console.log()
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    variables() {
      return variables
    }
  },
  created() {
    console.log()
  }
}
</script>
