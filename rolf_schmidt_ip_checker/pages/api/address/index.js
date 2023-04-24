import prisma from '../../../lib/prisma'

export default async function handle(req, res) {
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
            const machine = req.body;

            await prisma.machineip.create({
                data: {
                    number: machine.number,
                    ip: machine.ip,
                    lastState: false
                }
            })

            var machines = await prisma.machineip.findMany()
            res.json(machines)
            break;
        case "DELETE":
            res.end()
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