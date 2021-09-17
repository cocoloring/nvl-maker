import errorHandleableAsync from '../src/main'

async function main(): Promise<void> {
    const $exec = errorHandleableAsync
    {
        const res = (await $exec(fetch, 'api/time')).asObject()

        if (res.succeed && res.result.ok) {
            const json = await res.result.json()
            console.log(json)
        }
        if (!res.succeed) console.error(res.error)
    }

    {
        const [res, err] = (await $exec(fetch, 'api/time')).asArray()

        if (res?.ok) {
            const [json, err] = await (await $exec(fetch, 'api/time')).asArray()
            if (err) {
                console.error(err)
            } else {
                console.log(json)
            }
        }
        if (err) {
            console.error(err)
        }
    }
}

main()
