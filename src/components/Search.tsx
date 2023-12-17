import React, { useState, useMemo } from 'react'
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { CardItem } from "../components/CardItem"
import { fromFetch } from 'rxjs/fetch';
import { of, mergeMap, catchError, startWith } from 'rxjs';
import { $ } from 'react-rxjs-elements';
import { MicroscopeIcon } from "./MicroscopeIcon"

export function Search() {
    const [name, setName] = useState('999');
    const stream$ = useMemo(() =>
        fromFetch(`https://chainlist-api.muzamint.com/api/v1/chainlist/search/${name}`)
            .pipe(
                mergeMap(response => response.json().then(x => x.map((x: any) =>
                (
                    <>
                        <CardItem
                            chain_name={x.meta.name}
                            chain_id={x.meta.id} />
                    </>

                )
                )).catch(e => console.error(e))),
                catchError(() => of('ERROR')),
                startWith('loading...')
            )
        , [name]);

    return (
        <div key="1" className="max-w-4xl mx-auto p-6">
            <div className="flex justify-between items-center mb-6">
                <div className="flex space-x-4 items-center">
                    <div className="relative">
                        <MicroscopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <Input
                            type="text"
                            value={name}
                            className="pl-10"
                            placeholder="search"
                            onChange={(e) => setName(e.target.value)}
                        /> 
                    </div>
                    <label className="flex items-center space-x-2">
                        <input className="form-checkbox" type="checkbox" />
                        <span>Include Testnets</span>
                    </label>
                </div>
                <Button className="bg-red-500 hover:bg-red-600 text-white">Connect Wallet</Button>
            </div>
            <div className="grid lg:grid-cols-2">
                <$>{stream$}</$>
            </div>
        </div>
    )
}