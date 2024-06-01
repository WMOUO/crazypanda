<script setup>
    import App from "@/App.vue";
import {ref} from "vue"
    const picked = ref([])
    const show = ref(false)

    const clearCheckbox = () => {
        picked.value = []
    }

    // const obj = [1,2,3]

    // const obj = [
    //     {
    //         'boundCount':1,
    //         'number':'0123456789'
    //     },
    //     {
    //         'boundCount':1,
    //         'number':'1234567890'
    //     },
        // {
        //     'boundCount':1,
        //     'number':'2345678901'
        // },
    // ]

    const obj_2 = {
                    "status": true,
                    "data": [
                        {
                        "phone": [
                            {
                                'boundCount':1,
                                'number':'0123456789'
                            },
                            {
                                'boundCount':1,
                                'number':'1234567890'
                            },
                            {
                                'boundCount':1,
                                'number':'2345678901'
                            },
                        ],
                        "student": {
                            "studentId": "string",
                            "studentName": "string",
                            "studentNameEn": "string",
                        }
                    },
                    {
                        "phone": [
                            {
                                'boundCount':1,
                                'number':'0123456789'
                            },
                            {
                                'boundCount':1,
                                'number':'1234567890'
                            },
                        ],
                        "student": {
                            "studentId": "string2",
                            "studentName": "string2",
                            "studentNameEn": "string2",
                        }
                    }
                ]
                }

    const good = () => {
        const array = [];
        // console.log(obj.length)
        // for(let i=0;i<=2;i++){
        //     if (i < obj.length){
        //         array.push({['phone'+(i+1)]:obj[i].number,['p'+i+'Verify']:obj[i].boundCount})
        //     }else{
        //         array.push({['phone'+(i+1)]:null,['p'+i+'Verify']:null})
        //     }
            
        //     console.log(obj[i])
        // }
        // console.log(array)
        console.log(obj_2.data)
        obj_2.data.forEach((item) => {
            const obj = {};
            obj['studentName'] = item.student.studentName;
            obj['studentNameEn'] = item.student.studentNameEn;
            obj['studentId'] = item.student.studentId;
            for (let i = 0; i <= 2; i++) {
            if (i < item.phone.length) {
                obj['phone' + (i + 1)] = item.phone[i].number
                obj['p' + i + 'Verify'] = item.phone[i].boundCount;
            } else {
                obj['phone' + (i + 1)] = null;
                obj['p' + (i+1) + 'Verify'] = null;
            }
            }
            array.push(obj)
        })
        console.log(array)
    }
</script>

<template>
    <div>
        <input type="radio" id="unshow" :value=false v-model="show" @change="clearCheckbox">
        <label for="unshow">不顯示</label>
        <input type="radio" id="show" :ref=true v-model="show" @change="clearCheckbox">
        <label for="show">顯示</label>
    </div>
    <div v-if="show">
        <div>
            <input type="checkbox" id="one" value="1" v-model="picked">
            <label for="one">one</label>
        </div>
        <div>
            <input type="checkbox" id="two" value="2" v-model="picked">
            <label for="two">two</label>
        </div>
        <p>Picked:{{ picked }}</p>
    </div>
    <div v-for="(item,index) in obj">
        <p>第{{index+1}}的資料是{{item.test}}</p>
    </div>
    <div>
        <button @click="good">good()</button>
    </div>
</template>