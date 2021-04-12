/*
 * @Description: 
 * @version: 
 * @Author: cy
 * @Date: 2021-04-09 15:21:49
 * @LastEditors: cy
 * @LastEditTime: 2021-04-12 16:05:38
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
import Index9 from '@/components/mixins/Index3.vue';
import Index10 from '@/components/mixins/Index4.vue';
import Index11 from '@/components/mixins/Index5.vue';
import Index12 from '@/components/mixins/Index6.vue';
import Index13 from '@/components/mixins/Index7.vue';
import Index14 from '@/components/mixins/Index8.vue';
import Index15 from '@/components/mixins/Index9.vue';
import Index16 from '@/components/mixins/Index10.vue';
import Index17 from '@/components/mixins/Index11.vue';
import Index18 from '@/components/mixins/Index12.vue';
import Index19 from '@/components/nesting/Index1.vue';
import Index20 from '@/components/nesting/Index2.vue';
import Index21 from '@/components/nesting/Index3.vue';
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
    },
    { 
        path: '/index9', 
        name: 'index9',
        component: Index9
    },
    { 
        path: '/index10', 
        name: 'index10',
        component: Index10
    },
    { 
        path: '/index11', 
        name: 'index11',
        component: Index11
    },
    { 
        path: '/index12', 
        name: 'index12',
        component: Index12
    },
    { 
        path: '/index13', 
        name: 'index13',
        component: Index13
    },
    { 
        path: '/index14', 
        name: 'index14',
        component: Index14
    },
    { 
        path: '/index15', 
        name: 'index15',
        component: Index15
    },
    { 
        path: '/index16', 
        name: 'index16',
        component: Index16
    },
    { 
        path: '/index17', 
        name: 'index17',
        component: Index17
    },
    { 
        path: '/index18', 
        name: 'index18',
        component: Index18
    },
    { 
        path: '/index19', 
        name: 'index19',
        component: Index19
    },
    { 
        path: '/index20', 
        name: 'index20',
        component: Index20
    },
    { 
        path: '/index21', 
        name: 'index21',
        component: Index21
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;
