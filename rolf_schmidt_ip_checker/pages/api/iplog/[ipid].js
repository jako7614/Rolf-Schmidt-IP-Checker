import prisma from '../../../lib/prisma'

export default async function handle(req, res) {
    const { ipid } = req.query
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
            // res.end(`Machine: ${mid}`)
            break;
        case "DELETE":
            await prisma.iplog.delete({
                where: { 
                    id: Number(ipid)
                },
            })

            var ipLogs = await prisma.iplog.findMany()
            res.json(ipLogs)
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