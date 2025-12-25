// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(event => {
    console.info('Hello, World! (Loaded server scripts)')
    event.shaped(
      Item.of('minecraft:stone', 3),
      [
        'A B',
        ' C ',
        'B A'
      ],
      {
        A: 'minecraft:andesite',
        B: 'minecraft:diorite',
        C: 'minecraft:granite'
      }
    )
})
