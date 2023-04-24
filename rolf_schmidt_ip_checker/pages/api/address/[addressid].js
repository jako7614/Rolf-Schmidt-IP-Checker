import prisma from '../../../lib/prisma'

export default async function handle(req, res) {
    const { addressid } = req.query
    switch (req.method) {
        case "GET": 
            // var machine = await prisma.machine.findUnique({
            //     where: {
            //         id: Number(mid)
            //     },
            //     include: {maintenances: true}
            // })
            // res.json(machine)
            
            break;
        case "POST":
            res.end()
            break;
        case "DELETE":
            await prisma.machineip.delete({
                where: { 
                    id: Number(addressid)
                },
            })

            var addresses = await prisma.machineip.findMany()
            res.json(addresses)
            break;
        case "PUT":
            // var machine = req.body
            
            // await prisma.machine.update({
            //     where: {
            //         id: Number(mid)
            //     },
            //     data: machine
                
            // })

            // var machines = await prisma.machine.findMany()
            // res.json(machines)
            break;
        case "PATCH":
            // var { id, time } = req.body
            // var machine = await prisma.machine.update({
            //     where: {
            //         id: id
            //     },
            //     data: {
            //         id: undefined,
            //         pumpname: undefined,
            //         time: new Date(time),
            //         active: undefined,
            //         nozzle: undefined,
            //         model: undefined
            //     }
                
            // })

            // var machines = await prisma.machine.findMany()
            // res.json(machines)
            
            break;
    }    
}