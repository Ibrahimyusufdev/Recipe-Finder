import { useRecipeStore } from "../store/useRecipeStore.js";
export const ShoppingList = () => {
    const shoppingList = useRecipeStore((state) => state.shoppingList);

    return (
        <>
            <section>
                <div className="container mx-auto px-4">
                    <ul>
                        <h1>Ingredients To Buy</h1>
                        {shoppingList.length !== 0 ? (
                            shoppingList.map((list) => (
                                <li key={list.id}>{list.orignal}</li>
                            ))
                        ) : (
                            <p>No Shopping List Found</p>
                        )}
                    </ul>
                </div>
            </section>
        </>
    )
}