'use client'
import React, { useEffect, useState } from 'react'
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import {GetFoodById} from '@/services/FoodService';
import Food from '@/models/Food';

export default function CardFood() {
    const [food,setfood] = useState< Food | null>(null)

useEffect(()=> {
    const pegarDado = async () => {
        try {
        const response = await GetFoodById("1");
        setfood(response);

    } catch (error){
        console.error("Erro ao pegar o prato:", error);
    }
    }
     pegarDado()   
    }, [])



    return (
        <div>
            <NeonGradientCard>
                <div className="p-4">
                    <p>{food?.nome}</p>
                    <span>Mundo!</span>
                </div>
            </NeonGradientCard>
        </div>

    )
}
