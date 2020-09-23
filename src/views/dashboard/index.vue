<template>
    <div class="dashboard-container">
        <div class="dashboard-title">数据概览</div>

        <div class="dashboard-wrapper">
            <div class="dashboard-box">
                <div class="dashboard-sub-title">总放飞人数</div>
                <div class="dashboard-num">1000000</div>
            </div>

            <div class="dashboard-box">
                <div class="dashboard-sub-title">总放飞人数</div>
                <div class="dashboard-num">1000000</div>
            </div>

            <div class="dashboard-box">
                <div class="dashboard-sub-title">总放飞人数</div>
                <div class="dashboard-num">1000000</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dashboard',
    data() {
        return {};
    },
    methods: {}
};
</script>

<style lang="scss" scoped>
.dashboard {
    &-container {
        margin: 30px;
    }
    &-title {
        font-weight: bold;
        font-size: 20px;
    }
    &-box {
        min-width: 200px;
        height: 100px;
        border-radius: 8px;
        background-color: #dde1e2;
        box-shadow: #bdc3c7 0 5px 5px;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin: 0px 40px;
    }
    &-wrapper {
        padding-top: 40px;
        display: flex;
    }
}
</style>
