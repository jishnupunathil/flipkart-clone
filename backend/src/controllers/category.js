const category = require("../models/category");
const slugify = require("slugify");



function createCategories(categories, parentId = null) {
    const categoryList = [];
    let category;
    if (parentId == null) {
      category = categories.filter((cat) => cat.parentId == undefined);
    } else {
      category = categories.filter((cat) => cat.parentId == parentId);
    }

    for (let cate of category) {
        categoryList.push({
          _id: cate._id,
          name: cate.name,
          slug: cate.slug,
          parentId: cate.parentId,
          type: cate.type,
          children: createCategories(categories, cate._id),
        });
      }
      return categoryList;
    }

exports.addCategory = (req, res) => {
    const categoryObj = {
      name: req.body.name,
      slug: slugify(req.body.name)
    };

  
    if (req.body.parentId) {
      categoryObj.parentId = req.body.parentId;
    }
  
    const cat = new category(categoryObj);
    cat.save().then((category) => {
        
        return res.status(201).json({ category });
        
    }).catch((error) => {
        
         return res.status(400).json({ error });
    });
  };

  exports.getCategories = (req, res) => {
    try{
        category.find({}).then((categories) => {

            const categoryList = createCategories(categories);
            res.status(200).json({ categoryList });
          
        });
        
    }catch(error){
        return res.status(400).json({ error });
    }
  };