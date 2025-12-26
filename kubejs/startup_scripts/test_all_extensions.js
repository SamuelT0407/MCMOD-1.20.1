// priority: 0

StartupEvents.registry('mekanism:gas', event => {
    //注册气体（id，颜色，显示的名字）
    event.create('flux_gas').color(0x7C4DBF).displayName('福鲁伊克斯气体') // 紫色 (AE2 Fluix)
})

StartupEvents.registry('mekanism:gas', event => {
    event.create('custom_gas').color(0x32CD32).displayName('自定义气体') // 鲜艳的柠檬绿
})

StartupEvents.registry('mekanism:infuse_type', event => {
    event.create('custom_infuse').color(0xFF4500).displayName('自定义灌注') // 醒目的橘红色
})

StartupEvents.registry('mekanism:pigment', event => {
    event.create('custom_pigment').color(0x00BFFF).displayName('自定义色素') // 深天蓝
})
