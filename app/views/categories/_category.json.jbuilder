json.extract! category, :id, :name, :desc, :price, :created_at, :updated_at
json.url category_url(category, format: :json)
