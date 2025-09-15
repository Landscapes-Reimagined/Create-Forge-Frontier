ServerEvents.recipes(event => 
    {
        // Pipe Recipe
            event.remove({ id: 'prettypipes:pipe' })
            event.remove({ id: 'ppfluids:fluid_pipe_to_pipe'})
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'create:brass_sheet',
                    },
                    {
                        item: 'create:brass_sheet',
                    },
                    {
                        tag: 'forge:glass',
                    },
                    {
                        item: 'create:chute'
                    }
                ],
                results: [
                    {
                        item: 'prettypipes:pipe',
                        count: 2
                    }
                ],
            }).id('forge_frontier:mixing/pipe');

        // Fluid Pipe
            event.remove({ id: 'ppfluids:fluid_pipe'})
            event.custom({
                type: "create:mixing",
                ingredients: [
                    {
                        item: 'create:brass_sheet',
                    },
                    {
                        item: 'create:brass_sheet',
                    },
                    {
                        tag: 'forge:glass',
                    },
                    {
                        item: 'create:fluid_pipe'
                    }
                ],
                results: [
                    {
                        item: 'ppfluids:fluid_pipe',
                        count: 2
                    }
                ],
            }).id('forge_frontier:mixing/fluid_pipe');        
    }
)