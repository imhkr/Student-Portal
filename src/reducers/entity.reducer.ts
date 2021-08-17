import { Entity } from "../models/Entity";

export interface EntityState<T extends Entity = Entity> {
    byId: {
        [id: number]: T;
    };
    selectedId?: number;
  loadingById: boolean;
  loadingList: boolean;
  error?:string;
}
export const initialEntityState = {
  byId: {},
  loadingById: false,
  loadingList: true,
  error:"Person Not Found!",
};


export const select = (state: EntityState, id: number) => ({
  ...state,
  selectedId: id,
  loadingById: true,
});

export const getIds = (entities: Entity[]) => {
    return entities?.map((e) => e.id);
};

export const addOne = (state: EntityState, entity: Entity,loading?:boolean) => {
    const checkingLoading=loading===undefined?state.loadingById:loading;
    return { ...state, byId: { ...state.byId, [entity.id!]: entity },
loadingById:checkingLoading,
};
};


export const addMany = (state: EntityState, entities: Entity[]) => {
    if (entities.length === 0) {
        return state;
    }


    const entityMap = entities.reduce((prev, entity) => {
        return { ...prev, [entity.id!]: entity };
    }, {});

    return {
        ...state,
        byId: { ...state.byId, ...entityMap },
    };
};

