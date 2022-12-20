import { is } from "@deepkit/type";

import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ObjectUnionNonPredictable = _test_deepkit_is(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    (input) => is<ObjectUnionNonPredictable>(input),
    ObjectUnionNonPredictable.SPOILERS,
);