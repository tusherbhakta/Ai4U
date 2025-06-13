"use server";

const { db } = require("@/lib/prisma");
const { auth } = require("@clerk/nextjs/server");

export async funtion updateUser(data) {
    const {userId} = await auth();
    if(!userId) {
        throw new Error("User not authenticated");
    }
    const user = await db.user.findUnique({
        where: {
            clerkUserId: userId,
        }
    })
    if(!user) {
        throw new Error("User not found");
    }
    try{
        const result = await db.$transaction(
            async (tx) =>{
                let industryInsight = await tx.industryInsight.findUnique({
                    where: {
                        industry : data.industry,
                    }
                },)
                if(!industryInsight){
                    industryInsight = await tx.industryInsight.create({
                        data: {
                            industryInsight : data.industry,
                            salaryRange: [],
                            growthRate: 0,
                            demandLevel: "Medium",
                            topSkills: [],
                            marketOutlook: "Neutral",
                            keyTrands: [],
                            recommendedSkills: [],
                            nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
                        }
                    })
                }

                const updateUser = await tx.user.update({
                    where: {
                        id: user.id,
                    },
                    data: {
                        industry: data.industry,
                        experience: data.experience,
                        bio: data.bio,
                        skills: data.skills,
                    }
                })
                return { updateUser, industryInsight };
            },
             {
            timeout: 10000,
            });
            
            return result.user;
    }
    catch(error) {
        console.error("Error updating user:", error.message);
        throw new Error("Failed to update user");
    }
}

export async function getUserOnboardingStatus(){
    const {userId} = await auth();
    if(!userId) {
        throw new Error("User not authenticated");
    }
    const user = await db.user.findUnique({
        where: {
            clerkUserId: userId,
        }
    })
    if(!user) {
        throw new Error("User not found");
    }

    try{
        const user = await db.user.findUnique({
            where:{
                clerkUserId: userId,
            },
            select: {
                industry: true,
            }
        })
        return { isOnboarding: !!user?.industry, }
    }
    catch(error){
        console.error("Error updating user:", error.message);
        throw new Error("Failed to update user");
    }
}