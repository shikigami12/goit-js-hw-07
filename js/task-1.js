/**
 * Function that counts the number of categories in the list
 * and displays the number of elements in each category
 * Expected structure:
 * <ul id="categories">
 *     <li>
 *         <h2>Category</h2>
 *         <ul>
 *             <li>Element 1</li>
 *             <li>Element 2</li>
 *             <li>Element 3</li>
 *         </ul>
 *     </li>
 * </ul>
 * @param idSelector - ID selector of the list with categories
 */
function countCategoriesWithSubcategories(idSelector) {
    const categoryList = document.getElementById(idSelector);
    const categories = categoryList.children;

    console.log(`Number of categories: ${categories.length}`);

    for (let i = 0; i < categories.length; i++) {
        const category = categories[i];
        const categoryName = category.querySelector('h2').textContent;
        const subcategories = category.querySelector('ul').children;

        console.log(`Category: ${categoryName}`);
        console.log(`Elements: ${subcategories.length}`);
    }
}

countCategoriesWithSubcategories('categories');