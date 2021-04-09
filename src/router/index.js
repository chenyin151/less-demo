/*
 * @Description: 
 * @version: 
 * @Author: cy
 * @Date: 2021-04-09 15:21:49
 * @LastEditors: cy
 * @LastEditTime: 2021-04-09 17:46:08
 */
import { createWebHistory, createRouter } from 'vue-router';
import Index1 from '@/components/variable/Index1.vue';
import Index2 from '@/components/variable/Index2.vue';
import Index3 from '@/components/variable/Index3.vue';
import Index4 from '@/components/variable/Index4.vue';
import Index5 from '@/components/variable/Index5.vue';
import Index6 from '@/components/variable/Index6.vue';
import Index7 from '@/components/mixins/Index1.vue';
import Index8 from '@/components/mixins/Index2.vue';
const routes = [
    { 
        path: '/index1', 
        name: 'index1',
        component: Index1
    },
    { 
        path: '/index2', 
        name: 'index2',
        component: Index2
    },
    { 
        path: '/index3', 
        name: 'index3',
        component: Index3
    },
    { 
        path: '/index4', 
        name: 'index4',
        component: Index4
    },
    { 
        path: '/index5', 
        name: 'index5',
        component: Index5
    },
    { 
        path: '/index6', 
        name: 'index6',
        component: Index6
    },
    { 
        path: '/index7', 
        name: 'index7',
        component: Index7
    },
    { 
        path: '/index8', 
        name: 'index8',
        component: Index8
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;
