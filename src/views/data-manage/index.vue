<template>
    <div class="data-manage-container">
        <div class="data-manage-header">
            <el-select v-model="timeVal" size="mini" style="margin-right:40px" placeholder="请选择">
                <el-option v-for="item in timeOpt" :key="item.value" :label="item.label" :value="item.value"> </el-option>
            </el-select>

            <el-select v-model="typeVal" size="mini" style="margin-right:40px" placeholder="请选择">
                <el-option v-for="item in typeOpt" :key="item.value" :label="item.label" :value="item.value"> </el-option>
            </el-select>

            <div class="data-manage-download-btn">下载</div>
        </div>

        <el-table class="data-manage-table" :data="tableData" border style="width: 100%">
            <el-table-column prop="date" label="日期" width="180"> </el-table-column>
            <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    name: 'data-manage',
    data() {
        return {
            timeVal: '',
            timeOpt: [],

            typeVal: '',
            typeOpt: '',

            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }
            ]
        };
    },
    methods: {}
};
</script>

<style lang="scss" scoped>
.data-manage {
    &-container {
        margin: 30px;
    }
    &-header {
        display: flex;
        align-items: center;
    }
    &-download-btn {
        font-size: 12px;
        text-decoration: underline;
        cursor: pointer;
    }
    &-table {
        margin-top: 30px;
    }
}
</style>
