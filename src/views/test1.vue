<template>
    <div class="test2">
        test1
        <verification></verification>
        <el-button @click.native="linkHandle">toQuery</el-button>
    </div>
</template>

<script>
import verification from '../components/verification';
export default {
    components: {
        verification
    },
    methods: {
        linkHandle() {
            this.$router.push({ name: 'test3', query: { id: '1' } });
        }
    }
};
</script>
