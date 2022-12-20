import { is } from "@deepkit/type";

import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ObjectHierarchical = _test_deepkit_is(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    (input) => is<ObjectHierarchical>(input),
    ObjectHierarchical.SPOILERS,
);